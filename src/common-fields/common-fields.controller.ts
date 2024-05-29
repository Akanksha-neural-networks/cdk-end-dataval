import { Controller, Get } from '@nestjs/common';
import { CommonFieldsService } from './common-fields.service';

@Controller('common-fields')
export class CommonFieldsController {
  constructor(private readonly commonFieldsService: CommonFieldsService) {}

  @Get()
  getCommonFields(): { commonFields: string[] } {
    const commonFields = this.commonFieldsService.identifyCommonFields();
    return { commonFields };
  }
}
