import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUser from './IUserModel';
import { userModel } from './userModel';
export default class UserRepository extends VersionableRepository<
  IUser,
  mongoose.Model<IUser>
> {
  constructor() {
    super(userModel);
  }
  public async create(data): Promise<IUser> {
    return await this.genericCreate(data);
  }
  public async updateOne(query, change): Promise<IUser> {
    return await this.genericUpdate(query, change);
  }
  public async deleteOne(query) {
    return await this.genericDelete(query);
  }
}
