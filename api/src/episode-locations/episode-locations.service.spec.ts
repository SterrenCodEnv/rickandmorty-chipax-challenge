import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeLocationsService } from './episode-locations.service';
import { CommonModule } from '../common/common.module';

describe('EpisodeLocationsService', () => {
  let service: EpisodeLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      exports: [EpisodeLocationsService],
      providers: [EpisodeLocationsService],
    }).compile();

    service = module.get<EpisodeLocationsService>(EpisodeLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
