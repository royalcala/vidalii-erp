import { PrimaryKey, OneToMany, Collection, ManyToMany, FlushEventArgs, ChangeSetType } from "@mikro-orm/core";
import { EntityName, EventArgs, EventSubscriber, Subscriber } from '@mikro-orm/core';
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Context, Em, SECRET, Token } from "../../service";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash, verifyPassword } from "./user.password.lib";
import { Group } from "./user.group.entity";
import jwt from "jsonwebtoken";
import { persistVersion, Version } from "../version.entity";
import { db } from "../../db";
import { asyncLocalStorage } from "../../service"

// @Subscriber()
// export class UserSubscriber implements EventSubscriber<User> {

//     getSubscribedEntities(): EntityName<User>[] {
//         return [User];
//     }
//     async onFlush(args: FlushEventArgs): Promise<void> {
//         const changeSets = args.uow.getChangeSets();
//         const cs = changeSets.find(cs => (cs.type === ChangeSetType.CREATE || cs.type === ChangeSetType.UPDATE) && cs.entity instanceof User);

//         if (cs) {
//             console.log('User:::::::::')
//             const user = cs.entity as User
//             let version: Version
//             if (asyncLocalStorage.getStore()?.has('token')) {
//                 const token: Token = asyncLocalStorage.getStore().get('token')
//                 version = new Version({ id_document: user._id, user: token.id_user })
//             }
//             else
//                 version = new Version({ id_document: user._id, user: null })
//             args.uow.computeChangeSet(version);
//             // args.uow.recomputeSingleChangeSet(version);
//             // db.orm.em.persistAndFlush(version)
//         }
//     }
//     async beforeCreate(args: EventArgs<User>){
//         let version: Version
//         if (asyncLocalStorage.getStore()?.has('token')) {
//             const token: Token = asyncLocalStorage.getStore().get('token')
//             version = new Version({ id_document: args.entity._id, user: token.id_user })
//         }
//         else
//             version = new Version({ id_document: args.entity._id, user: null })
//         db.orm.em.persist(version) 
//     }
// }


@Entity()
export class User {
    @PrimaryKey()
    _id: string

    @Property()
    firstname: string

    @Property()
    lastname: string

    @val.IsEmail()
    @Property()
    email: string

    @Property()
    phone: string

    @Property()
    password: string

    @ManyToMany(() => Group)
    groups = new Collection<Group>(this);

    // @OneToMany(()=>Version,v=>v.id_document)
    // version:Version

    constructor(password: string) {
        this._id = new ObjectId().toHexString()
        this.password = hash(password)
        persistVersion({ id_document: this._id })

    }

    // @BeforeCreate()
    // update({ entity, em }: { entity: User, em: Db['orm']['em'] }) {

    // }
    // @onFlush()
    // versionInsert() {
    //     console.log('beforeCreate')
    //     let version: Version
    //     if (asyncLocalStorage.getStore()?.has('token')) {
    //         const token: Token = asyncLocalStorage.getStore().get('token')
    //         version = new Version({ id_document: this._id, user: token.id_user })
    //     }
    //     else
    //         version = new Version({ id_document: this._id, user: null })
    //     db.orm.em.persist(version)
    // }

}


app.post('/api/userLogin', async (req: any, res) => {
    const { email, password } = req.body;
    const user = await db.orm.em.findOne(User, { email }, ['groups'])
    if (user === null)
        res.status(401).send('Wrong credentials')
    else {
        const passwordCorrect = await verifyPassword(password, user.password)
        if (passwordCorrect === false)
            res.status(401).send('Wrong credentials')
        else {
            const token = 'Bearer ' + jwt.sign(
                {
                    id_user: user._id,
                    groups: user.groups.getItems().map(group => group.name)
                },
                SECRET,
                { expiresIn: '1d' }
            )
            res.send(token)
        }

    }








})




app.post('/userFind', async (req: any, res) => {
    const users = await db.orm.em.find(User, req.body)
    res.send(users)
})

app.post('/userInsert', async (req: any, res, next) => {
    const data = req.body as User
    const user = db.orm.em.assign(new User(data.password), data)
    await val.validateOrReject(user)
    db.orm.em.persist(user)
    await db.orm.em.flush()
    res.send(user)

})

app.post('/userUpdate', async (req: any, res) => {
    const data = req.body as User
    let user = await db.orm.em.findOne(User, data._id)
    user = db.orm.em.assign(user, data)
    await db.orm.em.flush()
    res.send()
})

