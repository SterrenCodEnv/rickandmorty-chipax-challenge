import { Controller, Get, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HelloDTO } from './dto/hello.dto';

@ApiTags('Main API')
@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }
  private logger = new Logger('AppController', { timestamp: true });

  @Get()
  @ApiOperation({ summary: 'Hello Guest' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The requested response has been successful',
  })
  async getHello(): Promise<HelloDTO> {
    this.logger.log(`APP Controller Init`);
    try {
      return await this.appService.getHello();
    } catch (err) {
      throw new Error(err);
    }
  }
}
