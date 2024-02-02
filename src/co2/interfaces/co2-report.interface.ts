import { CreateCo2ReportDto } from '../dto/create-co2-report.dto';

export interface Co2Report extends CreateCo2ReportDto {
  dirname: string;
}