import { Controller, Get, NotFoundException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'book', cmd: 'add-book' })
  addBook(bookDto) {
    const createData = this.appService.addBook(bookDto);
    if(createData){
      return {
        status : 200,
        message: 'Book has been added successfully'
      }
    }else{
      return {
        status : 500 ,
        message: 'Something went wrong!'
      }
    }
  }

  @MessagePattern({ role: 'book', cmd: 'edit-book' })
  editBook({id, editBookDto}) {
    const updateData = this.appService.editBook(id, editBookDto);
    if(updateData){
      return {
        status : 200,
        message: 'Book details have been updated successfully'
      }
    }else{
      return {
        status : 500,
        message: 'Something went wrong!'
      }
    }
  }

  @MessagePattern({ role: 'book', cmd: 'get-by-id' })
  async getBookById(id: number) {
    let bookData = await this.appService.getBookById(id);
    if (!bookData) {  
      return {
        status : 204,
        data: null,
        message: 'Book details are not found!'
      }
    } else {
      return {
        status : 200,
        data: bookData,
        message: 'Find the Book details'
      }
    }
  }

  @MessagePattern({ role: 'book', cmd: 'get-all-books' })
  async getAllBooks() {
    let bookData = await this.appService.getAllBooks();
    if (!bookData) {  
      return {
        status : 204,
        data: null,
        message: 'Books are not found!'
      }
    } else {
      return {
        status : 200,
        data: bookData,
        message: 'Find the books list'
      }
    }
  }

  @MessagePattern({ role: 'book', cmd: 'remove-book-by-id' })
  async removeBookById(id: number) {
    let removeBook = await this.appService.removeBookById(id);
    if(removeBook.affected) {
      return {
        status : 200,
        message: 'Book has been removed from the store'
      }
    } else {
      return {
        status : 204,
        message: 'Selected book is not found in the store'
      }
    }
  }
}