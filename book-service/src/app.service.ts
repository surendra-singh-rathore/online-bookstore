import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { bookDto } from './dto/book.dto';
import { editBookDto } from './dto/editBook.dto';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
    ) {}

    getHello(): string {
        return 'Hello World!';
    }
    // add a new book
    addBook(bookDto: bookDto) {    
        return this.bookRepository.save(bookDto);
    }
    // edit book details
    editBook(id, editBookDto: editBookDto) {
        return this.bookRepository.update(id, editBookDto);
    }
    // get book details by book ID
    getBookById(id) {
        return this.bookRepository.findOne({where: {id}});
    }
    // get list of the all books
    getAllBooks() {
        return this.bookRepository.find();
    }
    // remove book by ID
    removeBookById(id) {
        return this.bookRepository.delete(parseInt(id));
    }
}