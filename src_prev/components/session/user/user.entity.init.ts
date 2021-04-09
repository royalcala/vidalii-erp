import { VidaliiService } from "@vidalii/backend";
import { user as UserEntity } from "./user.entity";
import { usergroup } from "../group/group.entity";
import { Groups } from "../group/group.enum.api";

VidaliiService.db.addDbInit(
    async orm => {

        const user = new UserEntity()
        user.name = "admin"
        user.lastname = "admin"
        user.password = "admin"
        user.email = "admin@vidalii.com"
        user.phone = "4491862098"
        user.pre_persist()
        orm.em.persist(user)

        const ug = new usergroup()
        ug.group = [Groups.admin]
        ug.id_user = user._id
        orm.em.persist(ug)

        await orm.em.flush()

    })