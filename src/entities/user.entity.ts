import { PrimaryKey, OneToMany, Collection, ManyToMany } from "@mikro-orm/core";
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Request } from "../service";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash, verifyPassword } from "./user.password.lib";
import { Version } from "./version.entity";
import { Groups } from "./user.groups.entity";

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
    phone: number

    @Property()
    password: string

    @ManyToMany(() => Groups)
    groups = new Collection<Groups>(this);

}

app.post('/userVersions', async (req: any, res) => {
    const em = req.em as Request['em']
    const versions = await em.find(Version, { id_document: req.body.id_document })
    res.send(versions)
})

app.post('/userFind', async (req: any, res) => {
    //check token is admin
    const em = req.em as Request['em']
    const users = await em.find(User, req.body)
    res.send(users)
})
app.post('/userInsert', async (req: any, res, next) => {
    //check token is admin
    const em = req.em as Request['em']
    const user = em.assign(new User(), req.body)
    user._id = new ObjectId().toHexString()
    user.password = hash(user.password)
    await val.validateOrReject(user)
    // new Version().pre_insert()
    await em.persistAndFlush(user)

    res.send(user)
})



app.post('userLogin', async (req: any, res) => {
    const { email, password } = req.body;
    const em = req.em as Request['em']
    const user = await em.findOne(User, { email })
    if (!user)
        res.send({ error: { msg: `Wrong credentials` } })

    const passwordCorrect = await verifyPassword(password, user.password)
    if (passwordCorrect === false)
        res.send({ error: { msg: `Wrong credentials` } })

    // const groups = (await em.findOne(usergroup, { id_user: user._id })).group
    // const sessionEntity = new SessionEntity().prePersist_login(user._id)
    // context.em.persist(sessionEntity)

    // const token = 'Bearer ' + jwt.sign(
    //     {
    //         _id_user: user._id,
    //         groups,
    //     } as TOKEN,
    //     SECRET,
    //     { expiresIn: '1d' }
    // )

    // return token
})