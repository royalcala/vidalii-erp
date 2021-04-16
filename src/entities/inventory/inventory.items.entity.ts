import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { app, Context } from "../../service";
import { persistVersion, Version } from "../version.entity";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";

@Entity()
export class Inventory_items {
    constructor() {
        this._id = new ObjectId().toHexString()
        persistVersion({ id_document: this._id })
    }
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @OneToOne(() => Inventory_items_units_type)
    unitType: Inventory_items_units_type | string
}

app.post('/api/inventoryItemsInsert', async (req: any, res) => {
    const data = req.body as Inventory_items
    const context = req.context as Context
    const item = context.em.assign(new Inventory_items(), data)
    context.em.persist(item)
    await context.em.flush()
    res.send(item)
})

