
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
import { CriaComentarioDTO } from 'src/dto/cria-coment.dto';

@Controller('coments')
export class ComentsController {
   
   // Método construtor para ler a classe injetável
   constructor(private comentsService: ComentsService) {}

   @Post()
   async create(@Body() body: CriaComentarioDTO) {
      try {
         const novoComentario = this.comentsService.create(body);
         console.log(novoComentario)
         return await novoComentario
      } catch (error) {
         if (error.code == 11000) {
            throw new ConflictException('Comentário já enviado');
         }
         throw error;
      }
   }

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
