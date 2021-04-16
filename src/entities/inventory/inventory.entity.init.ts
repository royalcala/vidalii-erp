import { Db } from "../../db";
import { Inventory_items_unit } from "./inventory.items.units.entity";
import { Inventory_items_units_type } from "./inventory.items.units.type.entity";

//https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2Fwd4n7jLMdWRQgnGToBv-WAObOn0%3D%2F3277x2458%2Fsmart%2Ffilters%3Ano_upscale()%2Fsystem-of-units-with-names-605777630-5ab29b28a474be00193f2a4d.jpg&imgrefurl=https%3A%2F%2Fwww.thoughtco.com%2Finternational-system-of-measurement-si-2699435&tbnid=hc6iTiFf6ajudM&vet=12ahUKEwjDr-XCh_7vAhVETK0KHURcDBQQMygAegUIARC3AQ..i&docid=QncHgK-_4BELWM&w=3277&h=2458&q=unit%20system&hl=es-419&ved=2ahUKEwjDr-XCh_7vAhVETK0KHURcDBQQMygAegUIARC3AQ
export default async function Init_international_system_unit(orm: Db['orm']) {

    const mass = new Inventory_items_units_type()
    mass.name = "mass"

    const kg = new Inventory_items_unit()
    kg.equivalence = 1
    kg.name = "kilogram"

    const gram = new Inventory_items_unit()
    gram.equivalence = 1000
    gram.name = "gram"



    kg.unitType = mass
    gram.unitType = mass

    orm.em.persist([
        mass, kg, gram,
    ])



    // //default
    // // const unitType2=new Inventory_items_units_type("distance")
    // // const unitType3=new Inventory_items_units_type("time")
    // // const unitType4=new Inventory_items_units_type("volume")
    // // const unitType5=new Inventory_items_units_type("unit")



    await orm.em.flush()

}