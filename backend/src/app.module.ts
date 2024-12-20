import { Module } from '@nestjs/common';
import { ComentsController } from './coments/coments.controller';
import { ComentsService } from './coments/coments.service';
import { ComentsModule } from './coments/coments.module';

@Module({
  imports: [ComentsModule],
  controllers: [ComentsController],
  providers: [ComentsService],
})
export class AppModule {}
