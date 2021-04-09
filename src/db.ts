import { Connection, IDatabaseDriver, MikroORM, EntityManager, Options, AnyEntity, wrap, ReflectMetadataProvider } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import glob from 'glob';
import { OptionsCli } from './service.cli';

export class Db {
    constructor(private cli: OptionsCli) { }
    private ormConfig: Options
    public orm: MikroORM<IDatabaseDriver<Connection>>
    private async initDefaultValues() {
        const paths = glob.sync(this.cli.ENTITIES+`/entities/*.entity.init.{js,ts}`, { absolute: true })
        for (let index = 0; index < paths.length; index++) {
            await require(paths[index]).default(this.orm)
        }
    }
    private async initSchema() {
        const generator = this.orm.getSchemaGenerator();
        await generator.dropSchema();
        await generator.createSchema();
        await generator.updateSchema();
    }
    public async startDB() {
        this.ormConfig = {
            // metadataProvider: TsMorphMetadataProvider,
            metadataProvider: ReflectMetadataProvider,
            tsNode: process.env.NODE_DEV === 'true' ? true : false,
            type: 'sqlite',
            highlighter: new SqlHighlighter(),
            batchSize: 500,
            useBatchUpdates: true,
            useBatchInserts: true,
            entities: [this.cli.ENTITIES + '/entities/*.entity.{js,ts}'],
            entitiesTs: [this.cli.ENTITIES + '/entities/*.entity.{js,ts}'],
            dbName: this.cli.DB_PATH + '/data.db',
            cache: {
                enabled: true,
                pretty: true,
                options: { cacheDir: this.cli.DB_PATH }
            },
            debug: this.cli.DEBUG,
        }
        this.orm = await MikroORM.init(this.ormConfig)
        await this.initSchema()
        await this.initDefaultValues()

        return this
    }
}