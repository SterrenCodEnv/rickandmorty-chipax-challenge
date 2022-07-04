import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeLocationsService } from './episode-locations.service';
import { CommonModule } from '../common/common.module';
import { IEpisodeLocations } from './interfaces/episode-locations.interface';

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

  describe('getEpisodeLocations', () => {
    it('should return the object IEpisodeLocations', async () => {
      const result: IEpisodeLocations = {
        exercise_name: 'exercise_name',
        in_time: true,
        results: [],
        time: 'time',
      };
      jest
        .spyOn(service, 'getEpisodeLocations')
        .mockImplementation(async () => result);
      expect(await service.getEpisodeLocations()).toBe(result);
    });
  });
});
