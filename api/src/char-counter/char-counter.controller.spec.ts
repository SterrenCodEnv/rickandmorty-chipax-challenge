import { Test, TestingModule } from '@nestjs/testing';
import { CharCounterController } from './char-counter.controller';
import { CharCounterService } from './char-counter.service';
import { UtilsService } from '../common/utils/utils.service';
import { ExternalService } from '../common/external/external.service';

describe('CharCounterController', () => {
  let controller: CharCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharCounterController],
      providers: [CharCounterService, UtilsService, ExternalService],
    }).compile();

    controller = module.get<CharCounterController>(CharCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
