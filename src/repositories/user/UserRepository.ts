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
  public create(data): Promise<IUser> {
    return this.genericCreate(data);
  }
  public updateOne(query, change): Promise<IUser> {
    return this.genericUpdate(query, change);
  }
  public deleteOne(query) {
    console.log('inside deleteOne');
    console.log(query);
    return this.genericDelete(query);
  }
}
