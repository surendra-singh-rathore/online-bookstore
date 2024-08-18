import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderEntity } from './entity/order.entity';
import { OrderItemEntity } from './entity/orderItems.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'testuser',
      password: 'testuser123',
      database: 'online_bookstore',
      // host: '127.0.0.1',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'online_bookstore',
      entities: [OrderEntity, OrderItemEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([OrderEntity, OrderItemEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}