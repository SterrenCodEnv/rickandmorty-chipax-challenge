import { Module } from '@nestjs/common';
import { CharCounterController } from './char-counter.controller';
import { CharCounterService } from './char-counter.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CharCounterController],
  providers: [CharCounterService],
})
export class CharCounterModule {}
