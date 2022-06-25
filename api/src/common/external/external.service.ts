import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { DataType } from '../constants/external.constant';

@Injectable()
export class ExternalService {
  private logger = new Logger('ExternalService', { timestamp: true });

  async getPagesNumber(
    dataType: typeof DataType[keyof typeof DataType],
  ): Promise<number> {
    this.logger.log(
      `ExternalService - Get pages number in the api ${dataType}`,
    );
    try {
      const result = await axios.get(`${process.env.RAM_BASE_URL}${dataType}`);
      return result?.data?.info?.pages;
    } catch (error) {
      this.logger.log(`ExternalService - "Failed to get pages number"`);
      throw new Error(error);
    }
  }

  async getApiData(
    dataType: typeof DataType[keyof typeof DataType],
    page = 1,
  ): Promise<any> {
    this.logger.log(
      `ExternalService - Get data per page in the api ${dataType}, page ${page}`,
    );
    try {
      const result = await axios.get(
        `${process.env.RAM_BASE_URL}${dataType}?page=${page}`,
      );
      return result?.data;
    } catch (error) {
      this.logger.log(`ExternalService - "Failed to get data per page"`);
      throw new Error(error);
    }
  }

  async getAllApiData(
    dataType: typeof DataType[keyof typeof DataType],
  ): Promise<any> {
    this.logger.log(`ExternalService - Get all data in the api ${dataType}`);
    try {
      const numberPages = await this.getPagesNumber(dataType);
      const promises = [];

      for (let i = 1; i <= numberPages; i++) {
        promises.push(this.getApiData(dataType, i));
      }
      return Promise.all(promises)
        .then((pages) => {
          return [...pages];
        })
        .then((responses) => {
          return responses;
        })
        .catch((e) => {
          this.logger.log(`ExternalService - Failed to "Get all data"`);
          throw new Error(e);
        });
    } catch (error) {
      this.logger.log(`ExternalService - Failed to "Get all data"`);
      throw new Error(error);
    }
  }
}
