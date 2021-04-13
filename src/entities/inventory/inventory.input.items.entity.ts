import { Entity, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Inventory_input } from "./inventory.input.entity";

@Entity()
export class Inventory_input_items {
    @PrimaryKey()
    _id: string

    @Property()
    quantity: number

    @Property()
    price: number

    @ManyToOne(() => Inventory_input)
    Inventory_input?: Inventory_input;
}