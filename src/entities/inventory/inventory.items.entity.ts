import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";

@Entity()
export class Inventory_items {
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @OneToOne()
    unitType:Inventory_items_units_type
}
