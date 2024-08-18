import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookEntity } from './entity/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '127.0.0.1',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'online_bookstore',
      host: 'mysql_db',
      port: 3307,
      username: 'testuser',
      password: 'testuser123',
      database: 'online_bookstore',
      entities: [BookEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BookEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}