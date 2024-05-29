import { Module } from '@nestjs/common';
import { CommonFieldsModule } from './common-fields/common-fields.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [CommonFieldsModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
