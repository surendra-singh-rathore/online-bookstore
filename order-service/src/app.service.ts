import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { orderDto } from './dto/order.dto';
import { orderItemDto } from './dto/orderItem.dto';
import { editOrderDto } from './dto/editOrder.dto';
import { OrderEntity } from './entity/order.entity';
import { OrderItemEntity } from './entity/orderItems.entity';

@Injectable()
export class AppService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @InjectRepository(OrderItemEntity)
    private orderItemRepository: Repository<OrderItemEntity>
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async addOrder(orderDto: orderDto, orderItemDto: orderItemDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // create the order
      let orderData = await queryRunner.manager.save(OrderEntity, orderDto);
      let orderID = orderData['id']; // find the order ID
      let newOrderItemData = JSON.parse(JSON.stringify(orderItemDto)).map(v => ({...v, order_id: orderID}));
      // create the order items
      await queryRunner.manager.save(OrderItemEntity, newOrderItemData);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
  editOrder(id, editOrderDto: editOrderDto) {
    return this.orderRepository.update(id, editOrderDto);
  }
  getOrderById(id) {
    return this.orderRepository.findOne({where: {id}});
  }
  getAllUserOrders(user_id) {
    return this.orderRepository.find({where: {user_id}});
  }
}
