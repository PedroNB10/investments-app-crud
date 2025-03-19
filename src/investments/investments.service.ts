import { DatabaseService } from './../database/database.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateInvestmentDto, UpdateInvestmentDto } from './investments.dto';

@Injectable()
export class InvestmentsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createInvestmentDto: CreateInvestmentDto) {
    if (new Date(createInvestmentDto.date) > new Date()) {
      throw new HttpException(
        'Date cannot be in the future',
        HttpStatus.BAD_REQUEST,
      );
    }

    const existingInvestment = await this.databaseService.investment.findFirst({
      where: {
        name: createInvestmentDto.name,
        type: createInvestmentDto.type,
      },
    });

    if (existingInvestment) {
      throw new HttpException(
        'Investment already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.databaseService.investment.create({
      omit: { id: true },
      data: createInvestmentDto,
    });
  }

  async findOne(id: string) {
    const investment = await this.databaseService.investment.findUnique({
      omit: { id: true },
      where: { id },
    });

    if (!investment) {
      throw new HttpException('Investment not found', HttpStatus.NOT_FOUND);
    }

    return investment;
  }

  async findAll() {
    return this.databaseService.investment.findMany({
      omit: { id: true },
    });
  }

  async update(id: string, updateInvestmentDto: UpdateInvestmentDto) {
    if (new Date(updateInvestmentDto.date) > new Date()) {
      throw new HttpException(
        'Date cannot be in the future',
        HttpStatus.BAD_REQUEST,
      );
    }

    const investment = await this.databaseService.investment.findUnique({
      where: { id },
    });

    if (!investment) {
      throw new HttpException('Investment not found', HttpStatus.NOT_FOUND);
    }

    return this.databaseService.investment.update({
      omit: { id: true },
      where: { id },
      data: updateInvestmentDto,
    });
  }

  async remove(id: string) {
    const investment = await this.databaseService.investment.findUnique({
      where: { id },
    });

    if (!investment) {
      throw new HttpException('Investment not found', HttpStatus.NOT_FOUND);
    }

    await this.databaseService.investment.delete({
      where: { id },
    });
  }
}
