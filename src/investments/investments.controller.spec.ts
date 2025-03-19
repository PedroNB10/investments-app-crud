import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';
import { DatabaseService } from '../database/database.service';

const mockDatabaseService = {
  investment: {
    findFirst: jest.fn(),
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('InvestmentsController', () => {
  let controller: InvestmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentsController],
      providers: [
        InvestmentsService,
        { provide: DatabaseService, useValue: mockDatabaseService },
      ],
    }).compile();

    controller = module.get<InvestmentsController>(InvestmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
