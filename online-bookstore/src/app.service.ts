import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

    constructor(
        @Inject('BOOK_MICROSERVICE') private readonly bookClient: ClientProxy,
        @Inject('ORDER_MICROSERVICE') private readonly orderClient: ClientProxy
    ) {}
    getHello(): string {
        return 'Hello World!';
    }
    // book service APIs
    addBook(bookDto) {
        return this.bookClient.send({ role: 'book', cmd: 'add-book' }, bookDto);
    }
    editBook(id, editBookDto) {
        return this.bookClient.send({ role: 'book', cmd: 'edit-book' }, {id, editBookDto});
    }
    getBookById(id: number) {
        return this.bookClient.send({ role: 'book', cmd: 'get-by-id' }, id);
    }
    getAllBooks() {
        return this.bookClient.send({ role: 'book', cmd: 'get-all-books' }, '');
    }
    removeBookById(id: number) {
        return this.bookClient.send({ role: 'book', cmd: 'remove-book-by-id' }, id);
    }
    // order service APIs
    addOrder(orderDetails) {
        return this.orderClient.send({ role: 'order', cmd: 'add-order' }, orderDetails);
    }
    editOrder(id, editOrderDto) {
        return this.orderClient.send({ role: 'order', cmd: 'edit-order' }, {id, editOrderDto});
    }
    getOrderById(id: number) {
        return this.orderClient.send({ role: 'order', cmd: 'get-order-by-id' }, id);
    }
    getAllUserOrders(user_id: number) {
        return this.orderClient.send({ role: 'order', cmd: 'get-all-user-orders' }, user_id);
    }
}