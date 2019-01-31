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
    return this.model.create({ ...data, _id: UserRepository.generateObjectID() });
  }
  update() {}
  delete() {}
  fetch() {}
}
