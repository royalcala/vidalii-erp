import { PrimaryKey, OneToMany, Collection, ManyToMany, BeforeCreate, OneToOne } from "@mikro-orm/core";
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Context, Em, SECRET, Token } from "../../service";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash, verifyPassword } from "./user.password.lib";
import { Group } from "./user.group.entity";
import jwt from "jsonwebtoken";
import { Version } from "../version.entity";
import { db } from "../../db";
import { asyncLocalStorage } from "../../service"

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

    pre_persist() {
        this._id = new ObjectId().toHexString()
        this.password = hash(this.password)
    }

    // @BeforeCreate()
    // update({ entity, em }: { entity: User, em: Db['orm']['em'] }) {

    // }
    @BeforeCreate()
    versionInsert() {
        console.log('beforeCreate')
        let version: Version
        if (asyncLocalStorage.getStore()?.has('token')) {
            const token: Token = asyncLocalStorage.getStore().get('token')
            version = new Version({ id_document: this._id, user: token.id_user })
        }
        else
            version = new Version({ id_document: this._id, user: null })
        db.orm.em.persist(version)        
    }

}


app.post('/userLogin', async (req: any, res) => {
    const { email, password } = req.body;
    const context = req.context as Context
    const user = await context.em.findOne(User, { email }, ['groups'])
    if (!user)
        res.send({ error: { msg: `Wrong credentials` } })

    const passwordCorrect = await verifyPassword(password, user.password)
    if (passwordCorrect === false)
        res.send({ error: { msg: `Wrong credentials` } })

    const token = 'Bearer ' + jwt.sign(
        {
            id_user: user._id,
            groups: user.groups.getItems().map(group => group.name)
        },
        SECRET,
        { expiresIn: '1d' }
    )

    res.send(token)
})




app.post('/userFind', async (req: any, res) => {
    const users = await db.orm.em.find(User, req.body)
    res.send(users)
})

app.post('/userInsert', async (req: any, res, next) => {
    const data = req.body as User
    const user = db.orm.em.assign(new User(), data)
    user.pre_persist()
    await val.validateOrReject(user)
    db.orm.em.persist(user)
    await db.orm.em.flush()
    res.send(user)

})

app.post('/userUpdate', async (req: any, res) => {
    const data = req.body as User
    let user = await db.orm.em.findOne(User, data._id)
    console.log(user)
    user = db.orm.em.assign(user, data)
    // const version = new Version({ id_document: user._id, user: context.token.id_user })
    // db.orm.em.persist(version)
    await db.orm.em.flush()
    res.send()
})