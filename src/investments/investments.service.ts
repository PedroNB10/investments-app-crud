import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InvestmentsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createInvestmentDto: Prisma.InvestmentCreateInput) {
    return this.databaseService.investment.create({
      data: createInvestmentDto,
    });
  }

  async findOne(id: string) {
    return this.databaseService.investment.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return this.databaseService.investment.findMany({});
  }

  async update(id: string, updateInvestmentDto: Prisma.InvestmentUpdateInput) {
    return this.databaseService.investment.update({
      where: { id },
      data: updateInvestmentDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.investment.delete({
      where: { id },
    });
  }
}
