import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true 속성은 유효성 검사 후 통과하지 못한것은 빼고 데이터 저장시킴
      // forbidNonWhitelisted 은 whitelist: true 일때 사용이 가능하며, 유효성 검사에 통과하지 못하면 에러를 발생시키고 데이터를 저장하지 않음
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
