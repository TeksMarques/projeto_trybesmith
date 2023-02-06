import ProductModel from '../models/ProductModel';
import { IProduct } from '../interfaces/productInterface';
import connection from '../models/connection';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) { }

  async create(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.productModel.create(name, amount);
    return newProduct;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.productModel.getAll();
    return products;
  }
}