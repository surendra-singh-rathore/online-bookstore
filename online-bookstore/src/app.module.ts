import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'BOOK_MICROSERVICE',
                transport:Transport.TCP,
                options: { host: 'book_microservice' },
            }
        ]),
        ClientsModule.register([
            {
                name: 'ORDER_MICROSERVICE',
                transport:Transport.TCP,
                options: { host: 'order_microservice', port: 3001 },
            }
        ])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}