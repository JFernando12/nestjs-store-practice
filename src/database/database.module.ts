import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm'

import config from 'src/config';

const API_KEY = '4124213';
const API_KEY_PROD = 'prod1234213';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = configService.postgres;
                return {
                    type: 'postgres',
                    host,
                    port,
                    username: user,
                    password,
                    database: dbName,
                    synchronize: true,
                    autoLoadEntities: true
                }
            }
        })
    ]
  ,providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.ENTORNO === 'PROD' ? API_KEY_PROD : API_KEY,
    },
    {
        provide: 'PG',
        useFactory: (configService: ConfigType<typeof config>) => {
            const { user, host, dbName, password, port } = configService.postgres;
            const client = new Client({
                user,
                host,
                database: dbName,
                password,
                port
            })
            client.connect();
            return client;
        },
        inject: [config.KEY]
    }
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
