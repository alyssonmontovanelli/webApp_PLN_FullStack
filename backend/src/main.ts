import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Configurar a validação global de dados
  app.useGlobalPipes(new ValidationPipe());

  // Configurar a porta com fallback para 3000
  const port = process.env.PORT || 3000;
  console.log(`App listening on port: ${port}`);  // Adicionando log para debug
  await app.listen(port);
}
bootstrap();




// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Para evitar o conflito de endpoints do front com back
//   app.enableCors()

//   // Antes de executar a rota no controller, passará por essa função
//   // para validar os dados seguindo o formato dto
//   app.useGlobalPipes(new ValidationPipe())
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap()