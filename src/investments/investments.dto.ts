import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  IsEnum,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InvestmentType } from '@prisma/client'; // or use $Enums.InvestmentType if that's your convention
export class CreateInvestmentDto {
  @ApiProperty({
    description: 'The name of the investment',
    example: 'Real State Fund',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: InvestmentType,
    description: 'The type of the investment',
    example: 'BOND',
  })
  @IsEnum(InvestmentType)
  type: InvestmentType;

  @ApiProperty({
    type: Number,
    description: 'The amount of the investment',
    example: 1000,
  })
  @IsNumber()
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @ApiProperty({
    type: Date,
    description: 'The date of the investment',
  })
  @IsDateString({ message: 'Date must be a valid ISO date string' })
  date: Date;
}

export class UpdateInvestmentDto {
  @ApiProperty({
    description: 'The name of the investment',
    example: 'Real State Fund',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: InvestmentType,
    description: 'The type of the investment',
    example: 'BOND',
  })
  @IsEnum(InvestmentType)
  type: InvestmentType;

  @ApiProperty({
    type: Number,
    description: 'The amount of the investment',
    example: 1000,
  })
  @IsNumber()
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @ApiProperty({
    type: Date,
    description: 'The date of the investment',
  })
  @IsDateString({ message: 'Date must be a valid ISO date string' })
  date: Date;
}
