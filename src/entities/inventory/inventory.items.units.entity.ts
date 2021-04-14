import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "bson";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";


@Entity()
export class Inventory_items_unit {
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @Property()
    equivalence: number


    @OneToOne(() => Inventory_items_units_type)
    unitType: Inventory_items_units_type

    constructor() {
        this._id = new ObjectId().toHexString()
    }

}