import { Controller, Get, Logger, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EpisodeLocationsDTO } from './dto/episode-locations.dto';
import { EpisodeLocationsService } from './episode-locations.service';

@ApiTags('Episode Locations')
@Controller('episode-locations')
export class EpisodeLocationsController {
  constructor(
    private readonly episodeLocationsService: EpisodeLocationsService,
  ) {}
  private logger = new Logger('EpisodeLocationsController', {
    timestamp: true,
  });

  @Get()
  @ApiOperation({
    summary: 'Episode Locations',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The requested response has been successful',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description:
      'The server encountered an unexpected condition which prevented it from fulfilling the request.',
  })
  async getEpisodeLocations(): Promise<EpisodeLocationsDTO> {
    this.logger.log(`EpisodeLocationsController Init`);
    try {
      return await this.episodeLocationsService.getEpisodeLocations();
    } catch (err) {
      throw new Error(err);
    }
  }
}
