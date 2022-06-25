import { Module } from '@nestjs/common';
import { UtilsService } from './utils/utils.service';
import { ExternalService } from './external/external.service';

@Module({
  providers: [UtilsService, ExternalService],
  exports: [UtilsService, ExternalService],
})
export class CommonModule { }
