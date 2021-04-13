import { Collection, Entity, OneToMany, OneToOne, PrimaryKey } from "@mikro-orm/core";
import { app } from "../../service";
import { Inventory_input_items } from "./inventory.input.items.entity";
import { Inventory_supplier } from "./inventory.supplier.entity";

@Entity()
export class Inventory_input {
    @PrimaryKey()
    _id: string

    @OneToOne()
    supplier: Inventory_supplier

    @OneToMany(() => Inventory_input_items, i => i.Inventory_input )
    items = new Collection<Inventory_input_items>(this); 
}



