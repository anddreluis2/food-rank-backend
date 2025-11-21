import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './public/review/review.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, ReviewModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
