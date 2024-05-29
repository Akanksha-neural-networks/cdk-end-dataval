import { Test, TestingModule } from '@nestjs/testing';
import { CommonFieldsController } from './common-fields.controller';

describe('CommonFieldsController', () => {
  let controller: CommonFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonFieldsController],
    }).compile();

    controller = module.get<CommonFieldsController>(CommonFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
