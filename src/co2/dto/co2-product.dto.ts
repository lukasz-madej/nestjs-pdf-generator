import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ProductUnit } from '../enums/product-unit.enum';

export class Co2ProductDto {
  @IsNumber()
  confidenceLevel: number;

  @IsString()
  dominantFeedstock: string;

  @IsNumber()
  emissionsSavings: number;

  @IsNumber()
  emissionsSavingsPercentage: number;

  @IsNumber()
  energy: number;

  @IsNumber()
  energyShare: number;

  @IsString()
  name: string;

  @IsNumber()
  scope1Emission: number;

  @IsNumber()
  scope3Emission: number;

  @IsEnum(ProductUnit)
  unit: ProductUnit;

  @IsNumber()
  volume: number;
}