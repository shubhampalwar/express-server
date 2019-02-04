import * as mongoose from 'mongoose';
import IUser from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUser>;
  constructor() {
    this.model = userModel;
  }
  public create(data): Promise<IUser> {
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectID(),
    });
  }
  public countDocuments(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public findOne(query): mongoose.DocumentQuery<IUser, IUser, {}> {
    return this.model.findOne(query);
  }
  public updateOne(query, change): mongoose.Query<IUser> {
    return this.model.updateOne(query, change);
  }
  public updateMany(query, change): mongoose.Query<IUser> {
    return this.model.updateMany(query, change);
  }
  public deleteOne(query): mongoose.Query<{
    ok?: number;
    n?: number;
  }> {
    return this.model.deleteOne(query);
  }
  public deleteMany(query): mongoose.Query<{
    ok?: number;
    n?: number;
  }> {
    return this.model.deleteMany(query);
  }
}
