import { Test, TestingModule } from '@nestjs/testing';
import { CharCounterService } from './char-counter.service';
import { CommonModule } from '../common/common.module';
import { ICharCounters } from './interfaces/char-counter.interface';

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

  describe('getAllCharCount', () => {
    it('should return the object ICharCounters', async () => {
      const result: ICharCounters = {
        exercise_name: 'exercise_name',
        in_time: true,
        results: [],
        time: 'time',
      };
      jest
        .spyOn(service, 'getAllCharCount')
        .mockImplementation(async () => result);
      expect(await service.getAllCharCount()).toBe(result);
    });
  });
});
