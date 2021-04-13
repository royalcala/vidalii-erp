import { PrimaryKey, OneToMany, Collection, ManyToMany, BeforeCreate, OneToOne } from "@mikro-orm/core";
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Context, SECRET } from "../../service";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash, verifyPassword } from "./user.password.lib";
import { Group } from "./user.group.entity";
import jwt from "jsonwebtoken";
import { Version } from "../version.entity";

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
    //check token is admin
    const context = req.context as Context
    const users = await context.em.find(User, req.body)
    res.send(users)
})

app.post('/userInsert', async (req: any, res, next) => {
    const data = req.body as User
    const context = req.context as Context
    const user = context.em.assign(new User(), data)
    user.pre_persist()
    await val.validateOrReject(user)    
    const version = new Version({ id_document: user._id, id_user: context.token.id_user })
    context.em.persist([user, version])
    await context.em.flush()

    res.send(user)
})