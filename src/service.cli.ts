#!/usr/bin/env node
import yargs from "yargs"
import Path from "path";
import { startService } from "./service";

export type OptionsCli = {
    ENTITIES?: string
    PORT: number,
    DB_PATH: string,
    DEBUG: boolean
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
            await startService(args)
        }
    )
    .argv