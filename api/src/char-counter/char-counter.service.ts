import { Injectable, Logger } from '@nestjs/common';
import { ExternalService } from '../common/external/external.service';
import { DataType, WordType } from '../common/constants/external.constant';
import { UtilsService } from '../common/utils/utils.service';
import {
  ICharCountersResult,
  ICharCounters,
} from './interfaces/char-counter.interface';

@Injectable()
export class CharCounterService {
  constructor(
    private readonly externalService: ExternalService,
    private readonly utilsService: UtilsService,
  ) {}
  private logger = new Logger('CharCounterService', { timestamp: true });

  async getAllCharCount(): Promise<ICharCounters> {
    this.logger.log(`CharCounterService - Get all char counter`);
    try {
      const hrstart = process.hrtime();
      const letters = [WordType.C, WordType.E, WordType.L];
      let names: string[][] = [];
      let counters: ICharCountersResult[] = [];

      const allApiData = await Promise.all([
        this.externalService.getAllApiData(DataType.CHARACTER),
        this.externalService.getAllApiData(DataType.EPISODE),
        this.externalService.getAllApiData(DataType.LOCATION),
      ])
        .then((responses) => {
          return responses;
        })
        .catch((e) => {
          throw new Error(e);
        });

      for (let i = 0; i < letters.length; i++) {
        const name: string[] = await allApiData[i]
          .map(({ results }) => results.map(({ name }) => name))
          .flat();
        names = [...names, name];
      }

      for (let i = 0; i < letters.length; i++) {
        const counter: ICharCountersResult = {
          char: i === 0 ? WordType.C : i === 1 ? WordType.E : WordType.L,
          resource:
            i === 0
              ? DataType.CHARACTER
              : i === 1
              ? DataType.EPISODE
              : DataType.LOCATION,
          count: this.utilsService.letterCounter(
            names[i].toString(),
            i === 0 ? WordType.C : i === 1 ? WordType.E : WordType.L,
          ),
        };
        counters = [...counters, counter];
      }
      const hrend = process.hrtime(hrstart);
      const time = hrend[0] + 's.' + hrend[1];
      this.logger.log(`CharCounterService - Char counter finished at ${time}`);
      const data: ICharCounters = {
        exercise_name: 'Char counter',
        time,
        in_time: hrend[0] < 3 && true,
        results: counters,
      };
      return data;
    } catch (error) {
      this.logger.log(`CharCounterService - Failed to "Get all char counter"`);
      throw new Error(error);
    }
  }
}
