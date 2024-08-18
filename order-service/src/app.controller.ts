import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'order', cmd: 'add-order' })
  addOrder(orderDetails) {
    const createData = this.appService.addOrder(orderDetails, orderDetails['order_items']);
    if(createData){
      return {
        status : 200,
        message: 'Order has been placed successfully'
      }
    }else{
      return {
        status : 500,
        message: 'Something went wrong!'
      }
    } 
  }

  @MessagePattern({ role: 'order', cmd: 'edit-order' })
  editOrder({id, editOrderDto}) {
    const updateData = this.appService.editOrder(id, editOrderDto);
    if(updateData){
      return {
        status : 200 ,
        message: 'Order status has been updated successfully'
      }
    }else{
      return {
        status : 500 ,
        message: 'Something went wrong!'
      }
    }
  }

  @MessagePattern({ role: 'order', cmd: 'get-order-by-id' })
  async getOrderById(id: number) {
    let orderData = await this.appService.getOrderById(id);
    if (!orderData) {  
      return {
        status : 204,
        data: null,
        message: 'Order details are not found!'
      }
    } else {
      return {
        status : 200,
        data: orderData,
        message: 'Find the order details'
      }
    }
  }

  @MessagePattern({ role: 'order', cmd: 'get-all-user-orders' })
  async getAllUserOrders(user_id: number) {
    let orderDetails = await this.appService.getAllUserOrders(user_id);
    if(orderDetails.length > 0) {
      return {
        status : 200,
        data: orderDetails,
        message: 'Find the list of the orders'
      }
    } else {
      return {
        status : 204,
        data: null,
        message: 'No orders found!'
      }
    }
  }
}