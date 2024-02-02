import { Module } from '@nestjs/common';
import { ReportService } from './report/report.service';
import { Co2Controller } from './co2/co2.controller';
import { Co2Service } from './co2/co2.service';

@Module({
  imports: [],
  controllers: [Co2Controller],
  providers: [ReportService, Co2Service],
})
export class AppModule {}
