import { IsString } from 'class-validator';

export class CreateCo2ReportDto {
    @IsString()
    name: string;


}