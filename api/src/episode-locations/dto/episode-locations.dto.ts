import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IEpisodeLocationsResult } from '../interfaces/episode-locations.interface';

export class EpisodeLocationsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  exercise_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  time: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  in_time: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  results: IEpisodeLocationsResult[];
}
