import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { db } from "../../db";
import { app } from "../../service";
import { User } from "./user.entity";


@Entity()
export class Group{

    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @ManyToMany(() => User, user => user.groups)
    users: Collection<User> = new Collection<User>(this);

    pre_persist() {
        this._id = new ObjectId().toHexString()
    }
}



app.post('/api/groupFind', async (req: any, res) => {
    try {
        const groups = await db.orm.em.find(Group, req.body)
        res.send(groups)   
    } catch (error) {
       res.status(400).send(`Error Query`)
    }
})
