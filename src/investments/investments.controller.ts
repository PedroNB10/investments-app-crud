import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Put,
  HttpCode,
} from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { CreateInvestmentDto, UpdateInvestmentDto } from './investments.dto';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  async create(@Body() createInvestmentDto: CreateInvestmentDto) {
    const investment =
      await this.investmentsService.create(createInvestmentDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Investment created successfully',
      data: investment,
    };
  }

  @Get()
  async findAll() {
    const investments = await this.investmentsService.findAll();
    if (!investments.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'No investments found',
        data: [],
      };
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Investments retrieved successfully',
      data: investments,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const investment = await this.investmentsService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Investment retrieved successfully',
      data: investment,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ) {
    const investment = await this.investmentsService.update(
      id,
      updateInvestmentDto,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Investment updated successfully',
      data: investment,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    await this.investmentsService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Investment deleted successfully',
    };
  }
}
