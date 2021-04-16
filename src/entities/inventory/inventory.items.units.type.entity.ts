import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { persistVersion } from "../version.entity";
import { Inventory_items_unit } from "./inventory.items.units.entity";


@Entity()
export class Inventory_items_units_type {
    constructor() {
        this._id = new ObjectId().toHexString()
        persistVersion({ id_document: this._id })
    }
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    // @OneToOne()
    // reference_unit: Inventory_items_unit

}