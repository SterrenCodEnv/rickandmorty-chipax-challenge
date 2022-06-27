import { Controller, Get, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CharCounterService } from './char-counter.service';
import { CharCounterDTO } from './dto/char-counter.dto';

@ApiTags('Char Counter')
@Controller('char-counter')
export class CharCounterController {
  constructor(private readonly charCounterService: CharCounterService) {}
  private logger = new Logger('CharCounterController', { timestamp: true });

  @Get()
  @ApiOperation({
    summary: 'Char Counter',
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
  async getCharCounter(): Promise<CharCounterDTO> {
    this.logger.log(`CharCounterController Init`);
    try {
      return await this.charCounterService.getAllCharCount();
    } catch (err) {
      throw new Error(err);
    }
  }
}
