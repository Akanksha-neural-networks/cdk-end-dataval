import { Test, TestingModule } from '@nestjs/testing';
import { CommonFieldsService } from './common-fields.service';

describe('CommonFieldsService', () => {
  let service: CommonFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonFieldsService],
    }).compile();

    service = module.get<CommonFieldsService>(CommonFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
