import { IsDate, IsNotEmpty, IsOptional, IsString, IsIn, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

// Data object Transform
export class CriaComentarioDTO {

   @IsString()
   @IsNotEmpty()
   texto: string;

   // @IsDateString()
   @IsOptional()
   @Transform(({ value }) => value ? new Date(value) : value) // Transforma a string em um objeto Date
   dataHora: Date;

   @IsOptional()
   @IsString()
   @IsIn(["Positivo", "Neutro", "Negativo"])
   sentimento: string;

}