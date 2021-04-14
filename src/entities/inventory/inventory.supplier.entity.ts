import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { app, Context } from "../../service";
import { Version } from "../version.entity";

@Entity()
export class Inventory_supplier {
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

    pre_persist() {
        this._id = new ObjectId().toHexString()
    }
}

app.post('/inventorySupplierInsert', async (req: any, res) => {
    const data = req.body as Inventory_supplier
    const context = req.context as Context
    const supplier = context.em.assign(new Inventory_supplier(), data)
    supplier.pre_persist()
    const version = new Version({ id_document: supplier._id, id_user: context.token.id_user })
    context.em.persist([supplier, version])
    await context.em.flush()
    res.send(supplier)
})