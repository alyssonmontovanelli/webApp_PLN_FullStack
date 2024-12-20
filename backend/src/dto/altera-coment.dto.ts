import { IsDate, IsOptional, IsString, IsIn } from 'class-validator';

// Data object Transform
export class AlteraComentDTO {

   @IsString()
   @IsOptional()
   texto?: string;

   @IsDate()
   @IsOptional()
   dataHora?: Date;

   @IsString()
   @IsOptional()
   @IsIn(["Positivo", "Neutro", "Negativo"])
   sentimento?: string;

}