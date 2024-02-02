import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportService } from '../report/report.service';
import { CreateCo2ReportDto } from './dto/create-co2-report.dto';
import { Co2Report } from './interfaces/co2-report.interface';
import { Co2Service } from './co2.service';

@Controller('co2')
export class Co2Controller {
  constructor(private readonly reportService: ReportService, private readonly co2Service: Co2Service) {
  }
  @Post()
  async createReport(@Body() dto: CreateCo2ReportDto, @Res() response: Response): Promise<void> {
    const reportData: Co2Report = {
      ...dto,
      endDate: this.co2Service.formatDate(dto.endDate),
      startDate: this.co2Service.formatDate(dto.startDate),
      dirname: __dirname
    }

    const buffer: Buffer = await this.reportService.renderReport<Co2Report>(reportData, 'co2/templates/co2.ejs');

    response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=invoice.pdf',
      'Content-Length': buffer.length,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0,
    });

    response.end(buffer);
  }
}
