import { Injectable, Logger } from '@nestjs/common';
import { DataType } from '../common/constants/external.constant';
import { ExternalService } from '../common/external/external.service';
import { IEpisodeLocations } from './interfaces/episode-locations.interface';

@Injectable()
export class EpisodeLocationsService {
  constructor(private readonly externalService: ExternalService) {}
  private logger = new Logger('EpisodeLocationsService', { timestamp: true });

  async getEpisodeLocations(): Promise<IEpisodeLocations> {
    this.logger.log(
      `EpisodeLocationsService - Get all locations of the episodes`,
    );
    try {
      const hrstart = process.hrtime();
      const allEpisodes: any = await this.externalService.getAllApiData(
        DataType.EPISODE,
      );

      const allEpisodeCharacters = allEpisodes
        .map(({ results }) =>
          results.map(({ name, episode, characters }) => {
            const characterIds = characters.map((character) => {
              return character.split('/').pop();
            });
            return {
              name,
              episode,
              characterIds,
            };
          }),
        )
        .flat();

      const results = await Promise.all(
        allEpisodeCharacters.map(
          async ({ characterIds, ...episodeCharacter }) => {
            const characters = await this.externalService.getApiDataByIds(
              DataType.CHARACTER,
              characterIds,
            );
            const locations = characters.map(({ location: { name } }) => name);
            return { locations: [...new Set(locations)], ...episodeCharacter };
          },
        ),
      );

      const hrend = process.hrtime(hrstart);
      const time = hrend[0] + 's.' + hrend[1];
      this.logger.log(
        `EpisodeLocationsService - Get all locations of the episodes finished at ${time}`,
      );
      return {
        exercise_name: 'Episode locations',
        time,
        in_time: hrend[0] < 3 && true,
        results,
      };
    } catch (error) {
      this.logger.error(
        `EpisodeLocationsService - Failed to "Get all locations of the episodes"`,
      );
      throw new Error(error);
    }
  }
}
