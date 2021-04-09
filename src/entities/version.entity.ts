import { Entity, Property, PrimaryKey, Index, DateType } from "@mikro-orm/core"



@Entity()
export class Version {

    @PrimaryKey()
    _id: string

    @Index()
    @Property()
    document_id: string

    @Property({ type: DateType, nullable: true })
    update: Date;
}