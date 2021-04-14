import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { app, Context } from "../../service";
import { Version } from "../version.entity";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";

@Entity()
export class Inventory_items {
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    @OneToOne(() => Inventory_items_units_type)
    unitType: Inventory_items_units_type | string
}


app.post('/inventoryItemsInsert', async (req: any, res) => {
    const data = req.body as Inventory_items
    const context = req.context as Context
    const item = context.em.assign(new Inventory_items(), data)
    const version = new Version({ id_document: item._id, user: context.token.id_user })
    context.em.persist([item, version])
    await context.em.flush()
    res.send(item)
})