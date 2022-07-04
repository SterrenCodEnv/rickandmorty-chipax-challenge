import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    service = module.get<UtilsService>(UtilsService);
  });

  describe('letterCounter', () => {
    it('should return the number of repetitions of the character', () => {
      const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      const spy = jest.spyOn(service, 'letterCounter');
      const isCount = service.letterCounter(ipsum, 'e');
      expect(spy).toHaveBeenCalled();
      expect(isCount).toEqual(5);
      spy.mockReset();
      spy.mockRestore();
    });
  });
});
