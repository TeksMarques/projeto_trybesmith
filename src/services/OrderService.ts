import OrderModel from '../models/OrderModel';
import { IOrder } from '../interfaces/orderInterface';
import connection from '../models/connection';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAll();
    return orders;
  }
}