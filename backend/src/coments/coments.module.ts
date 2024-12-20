import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comentario, ComentsSchema } from 'src/schemas/coments.schemas';

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
   providers: [ComentsService]
})
export class ComentsModule {}
