import { registerAs } from "@nestjs/config";

export default registerAs("config", () => {
    return{
        database: {
            db_name: process.env.DATABASE_NAME,
        },
        API: {
            api_key: process.env.API_KEY
        },
        postgres: {
            dbName: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT),
            password: process.env.POSTGRES_PASSWORD,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST
        },
        mysql: {
            dbName: process.env.MYSQL_DB,
            port: parseInt(process.env.MYSQL_PORT),
            password: process.env.MYSQL_PASSWORD,
            user: process.env.MYSQL_USER,
            host: process.env.MYSQL_HOST
        }
    }
})