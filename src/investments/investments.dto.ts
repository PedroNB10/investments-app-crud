import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  IsEnum,
} from '@nestjs/class-validator';
import { InvestmentType } from '@prisma/client'; // or use $Enums.InvestmentType if that's your convention

export class CreateInvestmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(InvestmentType)
  type: InvestmentType;

  @IsNumber()
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @IsDateString({ message: 'Date must be a valid ISO date string' })
  date: Date;
}

export class UpdateInvestmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(InvestmentType)
  type: InvestmentType;

  @IsNumber()
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @IsDateString({ message: 'Date must be a valid ISO date string' })
  date: Date;
}
