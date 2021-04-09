#!/usr/bin/env node
import yargs from "yargs"
import Path from "path";
import express from "express";
import { Db } from "./db";
import { glob } from "glob";
import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
export type OptionsCli = {
    ENTITIES: string
    PORT?: number,
    DB_PATH?: string,
    DEBUG?: boolean
}

export const app = express()
app.use(express.json());
export type Request = {
    em: EntityManager<IDatabaseDriver<Connection>>,
    body: object,
    query: object,
    params: object
}

yargs
    .command(
        'start', 'turn on the services',
        (yargs: yargs.Argv<OptionsCli>) => {
            yargs
                .option('PORT', {
                    type: 'number',
                    default: 4001
                })
                .option('DB_PATH', {
                    type: 'string',
                    default: '.',
                    description: 'directory for save local db, migrations and cache',
                    coerce: (value) => {
                        return Path.resolve(value)
                    }
                })
                .option('DEBUG', {
                    type: 'boolean',
                    default: true,
                    description: ''
                })
        },
        async (args: OptionsCli) => {
            args.ENTITIES = __dirname
            //init orm
            const db = await new Db(args).startDB()

            app.use((res, req, next) => {
                //@ts-ignore
                res.em = db.orm.em.fork()
                next()
            })
            //others routes
            const paths = glob.sync('./entities/*.entity')
            for (let index = 0; index < paths.length; index++) {
                const path = paths[index];
                require(path)
            }
            app.use(async (res, req, next) => {
                //@ts-ignore
                const em = res.em as Db['orm']['em']
                await em.flush()
                em.clear()
            })
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
    )
    .argv