import { Body, Controller, Post, Res } from '@nestjs/common';


import { Response } from 'express';
import { ReportService } from '../report/report.service';
import { CreateCo2ReportDto } from './dto/create-co2-report.dto';

@Controller('co2')
export class Co2Controller {
  constructor(private readonly reportService: ReportService) {
  }
  @Post()
  async createReport(@Body() dto: CreateCo2ReportDto, @Res() response: Response): Promise<void> {
    const buffer: Buffer = await this.reportService.renderReport<CreateCo2ReportDto>(dto, 'co2/templates/co2.ejs');

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
