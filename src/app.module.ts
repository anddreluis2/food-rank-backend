import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './public/review/review.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ReviewModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
