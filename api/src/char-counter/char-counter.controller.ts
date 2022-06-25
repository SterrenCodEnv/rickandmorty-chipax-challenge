import { Controller, Get, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CharCounterService } from './char-counter.service';
import { CharCounterDTO } from './dto/char-counter.dto';

@ApiTags('Char Counter')
@Controller('char-counter')
export class CharCounterController {
  constructor(private readonly charCounterService: CharCounterService) { }
  private logger = new Logger('CharCounterController', { timestamp: true });

  @Get()
  @ApiOperation({ summary: 'Char Counter' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Description 200',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Description de error 500',
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
