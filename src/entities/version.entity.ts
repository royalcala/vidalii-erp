import { Entity, Property, PrimaryKey, Index, DateType } from "@mikro-orm/core"



@Entity()
export class Version {

    @PrimaryKey()
    _id: string

    @Index()
    @Property()
    id_document: string

    @Property()
    id_user: string

    @Property({ type: DateType, nullable: true })
    update: Date;

    pre_insert(){
        
    }
}