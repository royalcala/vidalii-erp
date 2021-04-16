import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "bson";
import { persistVersion } from "../version.entity";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";


@Entity()
export class Inventory_items_unit {
    constructor() {
        this._id = new ObjectId().toHexString()
        persistVersion({ id_document: this._id })
    }
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @Property()//required  one of the group has equivalence 1
    equivalence: number


    @ManyToOne(() => Inventory_items_units_type)
    unitType: Inventory_items_units_type

}