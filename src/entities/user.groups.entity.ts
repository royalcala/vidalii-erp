import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";


@Entity()
export class Groups {

    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @ManyToMany(() => User, user => user.groups)
    books: Collection<User> = new Collection<User>(this);

}