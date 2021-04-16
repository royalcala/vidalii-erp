import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { db } from "../../db";
import { app, Context } from "../../service";
import { persistVersion, Version } from "../version.entity";

@Entity()
export class Inventory_supplier {
    constructor() {
        this._id = new ObjectId().toHexString()
        persistVersion({ id_document: this._id })
    }
    @PrimaryKey()
    _id: string

    @Property()
    name: string

    //rfc
    @Property()
    taxId: string

    @Property()
    address: string

    @Property()
    postalCode: number
}

app.post('/api/inventorySupplierInsert', async (req: any, res) => {
    const data = req.body as Inventory_supplier
    const supplier = db.orm.em.assign(new Inventory_supplier(), data)
    db.orm.em.persist(supplier)
    await db.orm.em.flush()
    res.send(supplier)
})

app.post('/api/inventorySupplierUpdate', async (req: any, res) => {
    const data = req.body as Inventory_supplier
    let supplier = await db.orm.em.findOne(Inventory_supplier, data._id)
    supplier = db.orm.em.assign(supplier, data)
    await db.orm.em.flush()
    res.send(supplier)
})