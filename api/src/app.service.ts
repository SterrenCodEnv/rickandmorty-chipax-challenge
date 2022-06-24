import { Injectable } from '@nestjs/common';
import { IHello } from './interfaces/hello.interface';

@Injectable()
export class AppService {
  async getHello(): Promise<IHello> {
    try {
      const message = {
        message: 'Hello World!',
      };
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }
}
