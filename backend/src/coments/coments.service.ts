import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//schema
import { Comentario } from 'src/schemas/coments.schemas'
// dto
import { CriaComentarioDTO } from '../dto/cria-coment.dto'
import { AlteraComentDTO } from '../dto/altera-coment.dto'

import { Model } from 'mongoose';

@Injectable()
export class ComentsService {

   // POST - GETALL - GETONE - DELETE - PATCH

   // Primeiramente declarar o construtor
   constructor(@InjectModel(Comentario.name) 
   private comentarioModel: Model<Comentario>) {} 

   // Ver todos os comentários GET
   async findAll() {
      try {
         const todosComentarios = await this.comentarioModel.find();
         return todosComentarios 
      } catch (error) {
         throw new Error(`Erro ao buscar os comentários: ${error.message}`)
      }
   }

   // Seleciona Um GET(id)
   async findOne(id: string) {
      try {
         const umComentario = await this.comentarioModel.findById(id)
         return umComentario
      } catch (error) {
         throw new Error(`Erro ao buscar os comentários: ${error.message}`)         
      }
   }

   // Criar comentarios POST - seguindo DTO de criar comentário
   async create(criaComentario: CriaComentarioDTO) {
      try {
         if (!criaComentario.sentimento) {
            criaComentario.sentimento = "Neutro";
         }
         const novoComentario = new this.comentarioModel(criaComentario);
         return await novoComentario.save();
      } catch (error) {
         throw new Error(`Erro ao buscar os comentários: ${error.message}`)
      }
   }

   // DELETE 
   async delete(id:string) {
      try {
         return await this.comentarioModel.findByIdAndDelete(id)
      } catch (error) {
         throw new Error(`Erro ao buscar os comentários: ${error.message}`)
      }
   }

   // UPDATE
   async update(id: string, alteracao:AlteraComentDTO) {
      return await this.comentarioModel.findByIdAndUpdate(id, alteracao, {new:true})
   }
}
