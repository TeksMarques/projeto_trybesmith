import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async create(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const newProduct = await this.productService.create(name, amount);
    return res.status(201).json(newProduct);
  }
}