import { Entity, PrimaryKey } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { persistVersion } from "../version.entity";


@Entity()
export class Inventory_output {
    constructor() {
        this._id = new ObjectId().toHexString()
        persistVersion({ id_document: this._id })
    }
    @PrimaryKey()
    _id: string
}