import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeLocationsController } from './episode-locations.controller';
import { EpisodeLocationsService } from './episode-locations.service';
import { ExternalService } from '../common/external/external.service';

describe('EpisodeLocationsController', () => {
  let controller: EpisodeLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpisodeLocationsController],
      providers: [EpisodeLocationsService, ExternalService],
    }).compile();

    controller = module.get<EpisodeLocationsController>(
      EpisodeLocationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
