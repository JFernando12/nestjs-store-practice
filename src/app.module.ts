import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviaroments } from 'envairoments';
import config from './config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: enviaroments[process.env.ENTORNO] || ".env",
    isGlobal: true,
    load: [config]
  }), ProductsModule, UsersModule, HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'TASKS', useFactory: async (http: HttpService) => {
        const response = http.get('https://jsonplaceholder.typicode.com/todos');
        const value = await firstValueFrom(response);
        return value.data;
      },
      inject: [HttpService]
    },
  ],
})
export class AppModule {}
