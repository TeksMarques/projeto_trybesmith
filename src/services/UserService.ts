import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/userInterface';
import connection from '../models/connection';

export default class UserService {
  private userModel: UserModel;
    
  constructor() {
    this.userModel = new UserModel(connection);
  }
    
  async create(username: string, vocation: string, level: number, password: string): Promise<
  IUser> {
    const newUser = await this.userModel.create(username, vocation, level, password);
    return newUser;
  }
}