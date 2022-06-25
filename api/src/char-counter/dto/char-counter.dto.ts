import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICharCounter } from '../interfaces/char-counter.interface';

export class CharCounterDTO {
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
  results: ICharCounter[];
}
