import { Entity } from "@mikro-orm/core";
import { PrimaryKey } from "@mikro-orm/core";


@Entity()
export class Session {
    @PrimaryKey()
    _id: string
    
}



