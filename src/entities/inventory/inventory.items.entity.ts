import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Inventory_items{
    @PrimaryKey()
    _id:string

    @Property()
    name:string


}
