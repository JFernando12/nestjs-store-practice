import { registerAs } from "@nestjs/config";

export default registerAs("config", () => {
    return{
        database: {
            db_name: process.env.DATABASE_NAME,
        },
        API: {
            api_key: process.env.API_KEY
        }
    }
})