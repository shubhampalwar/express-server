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
  public findOne(query): mongoose.DocumentQuery<IUser, IUser, {}> {
    return this.model.findOne(query).lean();
  }
  public updateOne(query, change): Promise<IUser> {
    return this.findOne({...query, deletedAt: {$exists: false}})
      .then((result) => {
        return this.genericUpdate(Object.assign(result, change));
      })
      .then((res) => {
        return this.model.updateOne(query, { deletedAt: Date.now() });
      })
      .catch((err) => {
        console.log('not found', err);
        return err;
      });
  }
  public deleteOne(query) {
    console.log('inside deleteOne');
    console.log(query);
    return this.genericDelete(query);
  }
}
