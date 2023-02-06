import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  private orderService: OrderService;
    
  constructor() {
    this.orderService = new OrderService();
  }
    
  async getAll(req: Request, res: Response): Promise<Response> {
    const orders = await this.orderService.getAll();
    return res.status(200).json(orders);
  }
}