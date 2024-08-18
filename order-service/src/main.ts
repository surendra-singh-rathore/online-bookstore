import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const logger = new Logger('Microservice');
async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.TCP,
        options: { host: 'order_microservice', port: 3001 },
    });
    app.useGlobalPipes(new ValidationPipe());
    await app.listen();
    logger.log('Order microservice is listening');
}
bootstrap();