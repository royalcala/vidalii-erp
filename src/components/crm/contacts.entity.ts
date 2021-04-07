import { api, ObjectId, orm, val } from "@vidalii/backend";


@api.InputType()
@orm.Entity()
export class crm_contacts {
    async pre_persist() {
        this._id = new ObjectId().toHexString()
        return this
    }
    @orm.PrimaryKey()
    _id: string


    @api.Field()
    @orm.Index()
    @orm.Property()
    _id_company: string

    @val.IsEmail()
    @api.Field()
    @orm.Property()
    email: string

    @api.Field()
    @orm.Property()
    firstname: string

    @api.Field()
    @orm.Property()
    lastname: string
}