// Importações
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

// Schemas para armazenamento no MongoDB
@Schema({
   timestamps: true
})

// Formato de dados para o MongoDB
export class Comentario {
   @Prop({
      unique: true,
      required: true,
      trim: true
   })
   texto: string;

   @Prop({
      default: () => new Date()
   })
   dataHora: Date;

   @Prop({
      trim: true
   })
   sentimento: string;
}

// Convertendo a classe Comentario em um Schema Mongoose
export const ComentsSchema = SchemaFactory.createForClass(Comentario);