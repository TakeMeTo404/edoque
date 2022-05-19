import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

const allData = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  hand(@Body() data): string {
    allData.push(data);

    return Math.random() < 0.5 ? 'меньше' : 'больше';
  }

  @Get('alldata')
  getAllData(): object[] {
    return allData;
  }
}
