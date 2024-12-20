import { IsDate, IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';

// Data object Transform
export class CriaComentarioDTO {

   @IsString()
   @IsNotEmpty()
   texto: string;

   @IsDate()
   @IsOptional()
   dataHora: Date;

   @IsOptional()
   @IsString()
   @IsIn(["Positivo", "Neutro", "Negativo"])
   sentimento: string;

}