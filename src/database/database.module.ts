import { Global, Module } from '@nestjs/common';

const API_KEY = "4124213";
const API_KEY_PROD = "prod1234213";

@Global()
@Module({
    providers: [
        {
            provide: "API_KEY",
            useValue: process.env.ENTORNO === "PROD" ? API_KEY_PROD : API_KEY
        }
    ],
    exports: ["API_KEY"]
})
export class DatabaseModule {}
