import { PrimaryKey, OneToMany } from "@mikro-orm/core";
import { Property } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";
import { app, Request } from "../service.cli";
import * as val from "class-validator";
import { ObjectId } from '@mikro-orm/mongodb'
import { hash } from "./user.password.lib";
import { Version } from "./version.entity";


@Entity()
export class User {
    // constructor(password) {
    //     this._id = new ObjectId().toHexString()
    //     this.password = hash(password)
    // }
    @PrimaryKey()
    _id: string = new ObjectId().toHexString()

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

}
// const find
app.get('/userFind/:operators', (req, res) => {
 //TODO middleware
})
app.post('/userInsert', async (req: any, res) => {
    const em = req.em as Request['em']
    const body = req.body
    const user = em.assign(new User(), body)
    user.password = hash(user.password)
    await val.validateOrReject(user)

    return user
})