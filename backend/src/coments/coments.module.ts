import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentario, ComentsSchema } from 'src/schemas/coments.schemas';
// Serviço de conexão com FASTAPI
import { SentimentoService } from './sentiment.service';

@Module({
   imports: [
      MongooseModule.forFeature([
        {
         name : Comentario.name,
         schema: ComentsSchema
         }
      ])
   ],
   controllers: [ComentsController],
   providers: [ComentsService, SentimentoService]
})
export class ComentsModule {}
