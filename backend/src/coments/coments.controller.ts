
import { 
   Post,
   Get,
   Body, 
   ConflictException, 
   Controller, 
   Param,
   Delete,
   Patch} from '@nestjs/common';
import { ComentsService } from './coments.service';
import { SentimentoService } from './sentiment.service'; // Conexão com FastAPI
import { CriaComentarioDTO } from 'src/dto/cria-coment.dto';

@Controller('coments')
export class ComentsController {
   
   // Método construtor para ler a classe injetável
   constructor(private comentsService: ComentsService,
               private sentimentoService: SentimentoService // injetando sentimento service
   ) {}

   @Post()
   async create(@Body() body: CriaComentarioDTO) {
      try {
         // Verificando sentimento do texto - FastAPI
         const sentimento = await this.sentimentoService.analisarSentimento(body.texto)

         // adiciona o sentimento ao DTO
         const comentarioComSentimento = {
            ...body,
            sentimento, // inclui resultado da análise de sentimento
         };

         // Salva no banco de dados
         const novoComentario = this.comentsService.create(comentarioComSentimento);
         console.log(novoComentario)
         return novoComentario;

      } catch (error) {
         if (error.code == 11000) {
            throw new ConflictException('Comentário já enviado');
         }
         throw error;
      }
   }

   // @Post()
   // async create(@Body() body: CriaComentarioDTO) {
   //    try {
   //       const novoComentario = this.comentsService.create(body);
   //       console.log(novoComentario)
   //       return await novoComentario
   //    } catch (error) {
   //       if (error.code == 11000) {
   //          throw new ConflictException('Comentário já enviado');
   //       }
   //       throw error;
   //    }
   // }



   // Pegar todos os comentário
   @Get()
   async findAll(){
      try {
         const todosComentarios = this.comentsService.findAll();
         return await todosComentarios
      } catch (error) {
         throw error;       
      }
   }

   @Get(":id")
   async findOne(@Param('id') id:string){
      try {
         const unicoComentario = this.comentsService.findOne(id);
         return await unicoComentario
      } catch (error) {
         throw error;       
      }
   }

   @Delete(":id")
   async delete(@Param('id') id:string){
      try {
         return await this.comentsService.delete(id);
      } catch (error) {
         throw error;       
      }
   }

   @Patch(":id")
   async update(@Param('id') id:string, @Body() body:any){
      try {
         return await this.comentsService.update(id, body);
      } catch (error) {
         throw error;       
      }
   }
}
