import { PrimaryKey, OneToMany, Collection, ManyToMany } from "@mikro-orm/core";
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Context, SECRET } from "../service";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash, verifyPassword } from "./user.password.lib";
import { Version } from "./version.entity";
import { Group } from "./user.group.entity";
import jwt from "jsonwebtoken";
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

app.post('/userVersions', async (req: any, res) => {
    const context = req.context as Context
    const versions = await context.em.find(Version, { id_document: req.body.id_document })
    res.send(versions)
})

app.post('/userFind', async (req: any, res) => {
    //check token is admin
    const context = req.context as Context
    const users = await context.em.find(User, req.body)
    res.send(users)
})
app.post('/userInsert', async (req: any, res, next) => {
    //check token is admin
    const context = req.context as Context
    const user = context.em.assign(new User(), req.body)
    user.pre_persist()
    await val.validateOrReject(user)
    await context.em.persistAndFlush(user)

    res.send(user)
})


app.post('userLogin', async (req: any, res) => {
    const { email, password } = req.body;
    const context = req.context as Context
    const user = await context.em.findOne(User, { email })

    if (!user)
        res.send({ error: { msg: `Wrong credentials` } })

    const passwordCorrect = await verifyPassword(password, user.password)
    if (passwordCorrect === false)
        res.send({ error: { msg: `Wrong credentials` } })

    const token = 'Bearer ' + jwt.sign(
        {
            _id_user: user._id,
        },
        SECRET,
        { expiresIn: '1d' }
    )

    res.send(token)
    // return token
})