import { Entity, Property, PrimaryKey, Index, TimeType, OneToOne, OneToMany, ManyToMany, ManyToOne } from "@mikro-orm/core"
import { ObjectId } from "@mikro-orm/mongodb";
import { db } from "../db";
import { app, asyncLocalStorage, Context, Token } from "../service";
import { User } from "./user/user.entity";


@Entity()
export class Version {
    @PrimaryKey()
    _id: string

    @Index()
    @Property()
    id_document: string

    @ManyToOne(() => User)
    user: User | string

    @Property(
        // { type: TimeType, nullable: true }
    )
    update: number;

    constructor({ user, id_document }) {
        this._id = new ObjectId().toHexString()
        this.user = user
        this.id_document = id_document
        this.update = new Date().getTime()
    }
}


app.post('/versions', async (req: any, res) => {
    const context = req.context as Context
    const documents: string[] = req.body.id_documents
    const versions = await context.em.find(Version, documents)
    res.send(versions)
})

export function persistVersion({ id_document }) {
    let version: Version
    if (asyncLocalStorage.getStore()?.has('token')) {
        const token: Token = asyncLocalStorage.getStore().get('token')
        version = new Version({ id_document, user: token.id_user })
    }
    else
        version = new Version({ id_document, user: null })
    db.orm.em.persist(version)
}