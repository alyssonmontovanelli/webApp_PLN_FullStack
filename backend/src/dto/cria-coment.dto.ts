import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// Data object Transform
export class CriaComentario {

   @IsString()
   @IsNotEmpty()
   texto: string;

   @IsDate()
   @IsOptional()
   dataHora: Date;

   @IsOptional()
   sentimento: string;

}