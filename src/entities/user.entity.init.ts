import { User } from "./user.entity";
import { Group } from "./user.group.entity";
import { Db } from "../db";


export default async function (orm: Db['orm']) {

    const user = new User()
    user.firstname = "admin"
    user.lastname = "admin"
    user.password = "admin"
    user.email = "admin@vidalii.com"
    user.phone = "4491862098"
    user.pre_persist()

    const group = new Group()
    group.name = "admin"
    group.pre_persist()

    
    user.groups.add(group)
    // thanks to bi-directional cascading we only need to persist user entity
    orm.em.persist(user)
    await orm.em.flush()

}