import { Injectable } from '@nestjs/common';
import { WordType } from '../constants/external.constant';

@Injectable()
export class UtilsService {
  letterCounter(
    text: string,
    letter: typeof WordType[keyof typeof WordType],
  ): number {
    return (text.match(new RegExp(letter, 'gi')) || []).length;
  }
}
