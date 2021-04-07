import { api, Context } from "@vidalii/backend";
import { crm_contacts } from "./contacts.entity";

@api.ObjectType()
export class CRMContacts implements Partial<crm_contacts>{
    @api.Field()
    _id: string
}


@api.Resolver()
export class ContactsResolver {
    crmContactsCreateOne(
        @api.Arg('contact', { validate: true }) contact: crm_contacts,
        @api.Ctx() context: Context
    ) {
        contact.pre_persist()
        context.em.persist(contact)
        return contact
    }


}