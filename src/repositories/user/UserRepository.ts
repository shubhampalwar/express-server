import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUser from './IUserModel';
import { userModel } from './userModel';
export default class UserRepository extends VersionableRepository< IUser, mongoose.Model<IUser> > {
  //  public static generateObjectID() {
  //    return String(mongoose.Types.ObjectId());
  //  }
  constructor() {
    super(userModel);
  }
  public create(data): Promise<IUser> {
    this.genericCreate();
    return this.model.create(...data);
  }
  public countDocuments(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public findOne(query): mongoose.DocumentQuery<IUser, IUser, {}> {
    return this.model.findOne(query);
  }
  public updateOne(query, change): mongoose.Query<IUser> {
    this.genericUpdate();
    return this.model.updateOne(query, change);
  }
  public deleteOne(query): mongoose.Query<{
    ok?: number;
    n?: number;
  }> {
    return this.model.deleteOne(query);
  }
}
