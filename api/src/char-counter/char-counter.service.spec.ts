import { Test, TestingModule } from '@nestjs/testing';
import { CharCounterService } from './char-counter.service';
import { CommonModule } from '../common/common.module';

describe('CharCounterService', () => {
  let service: CharCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      exports: [CharCounterService],
      providers: [CharCounterService],
    }).compile();

    service = module.get<CharCounterService>(CharCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
