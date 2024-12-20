import { Module } from '@nestjs/common';
import { ComentsController } from './coments/coments.controller';
import { ComentsService } from './coments/coments.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ComentsModule } from './coments/coments.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://alyssonmontovanelli:8ptnHyQlqauJbKER@database.j4cyk.mongodb.net/?retryWrites=true&w=majority&appName=database`),
    ComentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

