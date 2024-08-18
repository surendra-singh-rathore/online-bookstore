import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    // book services
    
    // get the book details
    @Get('/book/book-details/:id')
    getById(@Param('id') id: number) {
        return this.appService.getBookById(id);
    }
    // get the list of all the books
    @Get('/book/all-books')
    getAllBooks() {
        return this.appService.getAllBooks();
    }
    // add a new book
    @Post('/book/add-book')
    create(@Body() bookDto) {
        return this.appService.addBook(bookDto);
    }
    // edit the book details
    @Patch('/book/edit-book/:id')
    editBook(@Param('id') id: number, @Body() editBookDto) {
        return this.appService.editBook(id, editBookDto);
    }
    // remove a book from the store
    @Delete('/book/remove-book/:id')
    removeBookById(@Param('id') id: number) {
        return this.appService.removeBookById(id);
    }

    // order services
    @Get('/order/order-details/:id')
    getOrderById(@Param('id') id: number) {
        return this.appService.getOrderById(id);
    }
    @Post('/order/create-order')
    addOrder(@Body() orderDetails) {
        return this.appService.addOrder(orderDetails);
    }
    @Patch('/order/update-order-status/:id')
    editOrder(@Param('id') id: number, @Body() editOrderDto) {
        return this.appService.editOrder(id, editOrderDto);
    }
    @Get('/order/all-user-orders/:user_id')
    getAllUserOrders(@Param('user_id') user_id: number) {
        return this.appService.getAllUserOrders(user_id);
    }
}