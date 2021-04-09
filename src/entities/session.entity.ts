import { Entity } from "@mikro-orm/core";
import { PrimaryKey } from "@mikro-orm/core";
import { app } from "../service.cli";


@Entity()
export class Session {
    @PrimaryKey()
    _id: string
}




