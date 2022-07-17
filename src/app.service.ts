import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(@Inject("API_KEY") private apiKey: string, @Inject("TASKS") private tasks: any[], private configService: ConfigService) {}
  
  getHello(): string {
    // console.log(this.tasks);
    const API_KEY = this.configService.get("API_KEY");
    const DATABASE_NAME = this.configService.get("DATABASE_NAME");
    return `Hello World! ${API_KEY}, ${DATABASE_NAME}`;
  }
}
