import { Inject, Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {

  // constructor(@Inject("API_KEY") private apiKey: string, @Inject("TASKS") private tasks: any[], private configService: ConfigService) {}
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {}
  
  getHello(): string {
    // console.log(this.tasks);
    // const API_KEY = this.configService.get("API_KEY");
    // const DATABASE_NAME = this.configService.get("DATABASE_NAME");
    const API_KEY = this.configService.API.api_key;
    const DATABASE_NAME = this.configService.database.db_name;
    return `Hello World! ${API_KEY}, ${DATABASE_NAME}`;
  }
}
