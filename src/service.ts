import express from "express";
import { Db } from "./db";
import { glob } from "glob";
import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import type { OptionsCli } from "./service.cli";

export type Request = {
    em: EntityManager<IDatabaseDriver<Connection>>,
    body: object,
    query: object,
    params: object
}

export const app = express()


export async function startService(args: OptionsCli) {
    args.ENTITIES = __dirname
    //init orm
    let db: Db
    app.use(express.json());
    app.use((req:any, res, next) => {
        //@ts-ignore
        //get token
        req.session = ''
        req.em = db.orm.em.fork()
        next();
    })
    db = await new Db(args).startDB()
    //others routes
    const paths = glob.sync(args.ENTITIES + '/**/*.entity.{ts,js}')
    for (let index = 0; index < paths.length; index++) {
        const path = paths[index];
        require(path)
    }
    // app.use(async (req: any, res, next) => {
    //     console.log('inFlush')
    //     const em = req.em as Request['em']
    //     await em.flush()
    //     em.clear()
    // })
    // app.get('/hellow', (req, res) => {
    //     res.send(`hello world!!`)
    // })
    // app.get('/json', (req, res) => {
    //     res.json({ hellow: "world" })
    // })
    // app.get('/params/:id', (req, res) => {
    //     res.send({...req.params,...req.query})
    // })

    // app.post("/add", (req, res) => {
    //     console.log(req.body)
    //     res.send(req.body)
    // })
    app.listen(args.PORT, () => console.log(`🚀Listenting on port ${args.PORT}`))
}