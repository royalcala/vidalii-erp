#!/usr/bin/env node
import yargs from "yargs"
import { VidaliiService } from "@vidalii/backend";
import fs from "fs";
import Path from "path";
import express from "express";

export type OptionsCli = {
    INPUT?: string
    ENV?: 'production' | 'testing',
    PORT?: number,
    DB_PATH?: string,
    DEBUG?: boolean
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
            args.INPUT = __dirname + '/components/**/*'
            // Path.join(__dirname, '../dist/components/**/*')
            // console.log(args.INPUT)
            const packageJson = require('../package.json')
            console.log(`${packageJson.name}:${packageJson.version}`)
            if (!fs.existsSync(args.DB_PATH)) {
                fs.mkdirSync(args.DB_PATH, { recursive: true })
                console.log(`Created data directory:${args.DB_PATH}`)
            }
            else
                console.log(`Using data directory:${args.DB_PATH}`)

            VidaliiService.server.host.use('/app',(express.static(Path.join(__dirname, '../frontend/build'))))
            VidaliiService.server.host.get('/app*', function (req, res) {
                res.sendFile(Path.join(__dirname, '../frontend/build', 'index.html'));
            });
            await VidaliiService.start(args)
        }
    )
    .argv