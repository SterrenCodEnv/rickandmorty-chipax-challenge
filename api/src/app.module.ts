import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { CharCounterModule } from './char-counter/char-counter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    CommonModule,
    CharCounterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
