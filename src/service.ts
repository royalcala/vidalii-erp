import express from "express";
import { Db, db } from "./db";
import { glob } from "glob";
import { EntityManager, IDatabaseDriver, Connection, RequestContext } from "@mikro-orm/core";
import type { OptionsCli } from "./service.cli";
import jwt from "jsonwebtoken";
import { AsyncLocalStorage } from "async_hooks"
export const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();
export type Context = {
    em: EntityManager<IDatabaseDriver<Connection>>,
    token: {
        id_user,
        groups: string[]
    } | null
}
export type Em = EntityManager<IDatabaseDriver<Connection>>
export type Token = {
    id_user,
    groups: string[]
} | null

export const app = express()
export const SECRET = process?.env?.SECRET || 'vidalii'


export async function startService(args: OptionsCli) {
    return new Promise(async (resolve, reject) => {
        args.ENTITIES = __dirname
        //init orm

        // await db.startDB()
        // let db: Db
        app.use(express.json());
        app.use(async (req, res, next) => {
            let token = null
            let auth = req?.headers?.authorization || null
            if (auth !== null) {
                const chain = auth.split('Bearer ')[1];
                await jwt.verify(chain, SECRET, (err, decoded) => {
                    if (err) {
                        token = null
                    }
                    else
                        token = decoded
                })

            }
            // https://medium.com/trabe/asynclocalstorage-for-easy-context-passing-in-node-js-e33c84679516
            asyncLocalStorage.run(new Map(), () => {
                asyncLocalStorage.getStore().set("token", token);
                asyncLocalStorage.getStore().set("em", db.orm.em.fork());
                next();
            });
        })
        app.use((req, res, next) => RequestContext.create(db.orm.em, next));
        app.use(async (req: any, res, next) => {
            let token = null
            let auth = req?.headers?.authorization || null
            if (auth !== null) {
                const chain = auth.split('Bearer ')[1];
                await jwt.verify(chain, SECRET, (err, decoded) => {
                    if (err) {
                        token = null
                    }
                    else
                        token = decoded
                })

            }
            req.context = {
                em: db.orm.em.fork(),
                token,
            }
            next();
        })
        // console.log("starting db....")
        // db = new Db()
        db.cli = args
        await db.startDB()
        // console.log("db started")
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
        app.listen(args.PORT, () => {
            console.log(`🚀Listenting on port ${args.PORT}`)
            resolve(true)
        })

    })
}