import { IsDate, IsString, ValidateNested } from 'class-validator';
import { Co2ProductGroupDto } from './co2-product-group.dto';
import { Type } from 'class-transformer';

export class CreateCo2ReportDto {
    @IsString()
    country: string;

    @IsString()
    customer: string;

    @IsDate()
    endDate: string;

    @ValidateNested({ each: true })
    @Type((): Function => Co2ProductGroupDto)
    productGroups: Co2ProductGroupDto[]

    @IsDate()
    startDate: string;
}