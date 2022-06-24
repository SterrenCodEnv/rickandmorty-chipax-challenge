import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class HelloDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly message: string;
}
