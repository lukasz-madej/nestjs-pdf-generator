import { Module } from '@nestjs/common';
import { ReportService } from './report/report.service';
import { Co2Controller } from './co2/co2.controller';


@Module({
  imports: [],
  controllers: [Co2Controller],
  providers: [ReportService],
})
export class AppModule {}
