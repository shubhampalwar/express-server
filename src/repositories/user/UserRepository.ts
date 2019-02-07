import * as mongoose from 'mongoose';
import { VersionableRepository } from '../versionable';
import IUserModel from './IUserModel';
import userModel from './userModel';
export default class UserRepository extends VersionableRepository<
IUserModel,
  mongoose.Model<IUserModel>
> {
  constructor() {
    super(userModel);
  }
  public async create(data): Promise<IUserModel> {
    return await this.genericCreate(data);
  }
  public async updateOne(query, change): Promise<IUserModel> {
    return await this.genericUpdate(query, change);
  }
  public async deleteOne(query) {
    return await this.genericDelete(query);
  }
}
