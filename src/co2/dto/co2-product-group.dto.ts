import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Co2ProductDto } from './co2-product.dto';

export class Co2ProductGroupDto {
  @IsString()
  name: string

  @ValidateNested({ each: true })
  @Type((): Function => Co2ProductDto)
  products: Co2ProductDto
}