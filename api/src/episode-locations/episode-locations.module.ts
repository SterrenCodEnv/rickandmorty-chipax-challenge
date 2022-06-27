import { Module } from '@nestjs/common';
import { EpisodeLocationsController } from './episode-locations.controller';
import { EpisodeLocationsService } from './episode-locations.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [EpisodeLocationsController],
  providers: [EpisodeLocationsService],
})
export class EpisodeLocationsModule {}
