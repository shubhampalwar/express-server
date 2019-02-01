import * as mongoose from "mongoose";
import IUser from "./IUserModel";
import { userModel } from "./UserModel";
export default class UserRepository {
  private model: mongoose.Model<IUser>;
  constructor() {
    this.model = userModel;
  }
  static generateObjectID() {
    console.log("inside generate obj id");
    return String(mongoose.Types.ObjectId());
  }
  public create(data): Promise<IUser> {
    console.log("inside create");
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectID()
    });
  }
  public updateOne(data, change): mongoose.Query<IUser> {
    return this.model.updateOne(data, change);
  }
  public updateMany(data, change): mongoose.Query<IUser> {
    return this.model.updateMany(data, change);
  }
  public deleteOne(data): mongoose.Query<{
    ok?: number;
    n?: number;
}> {
    return this.model.deleteOne(data);
  }
  public deleteMany(data): mongoose.Query<{
    ok?: number;
    n?: number;
}> {
    return this.model.deleteMany(data);
  }
}
