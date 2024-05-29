import { Module } from '@nestjs/common';
import { CommonFieldsService } from './common-fields.service';
import { CommonFieldsController } from './common-fields.controller';

@Module({
  providers: [CommonFieldsService],
  controllers: [CommonFieldsController]
})
export class CommonFieldsModule {}
