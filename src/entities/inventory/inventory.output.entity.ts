import { Entity, PrimaryKey } from "@mikro-orm/core";


@Entity()
export class Inventory_output {
    @PrimaryKey()
    _id: string
}