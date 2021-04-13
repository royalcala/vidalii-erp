import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
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