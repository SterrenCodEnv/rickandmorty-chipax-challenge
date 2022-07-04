import { Test, TestingModule } from '@nestjs/testing';
import { ExternalService } from './external.service';
import { IAllAPIData } from './interfaces/external.interface';

describe('ExternalService', () => {
  let service: ExternalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalService],
    }).compile();

    service = module.get<ExternalService>(ExternalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPagesNumber', () => {
    it('should return a number', async () => {
      const result = 1;
      jest
        .spyOn(service, 'getPagesNumber')
        .mockImplementation(async () => result);
      expect(await service.getPagesNumber('character')).toEqual(result);
    });
  });

  describe('getApiData', () => {
    it('should return a object', async () => {
      const result = {};
      jest.spyOn(service, 'getApiData').mockImplementation(async () => result);
      expect(await service.getApiData('character', 1)).toEqual(result);
    });
  });

  describe('getApiDataByIds', () => {
    it('should return a object', async () => {
      const result = {};
      jest
        .spyOn(service, 'getApiDataByIds')
        .mockImplementation(async () => result);
      expect(await service.getApiDataByIds('character', ['1'])).toEqual(result);
    });
  });

  describe('getAllApiData', () => {
    it('should return a array', async () => {
      const result: IAllAPIData[] = [];
      jest
        .spyOn(service, 'getAllApiData')
        .mockImplementation(async () => result);
      expect(await service.getAllApiData('character')).toEqual(result);
    });
  });
});
