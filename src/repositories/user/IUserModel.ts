import * as mongoose from "mongoose";
export default interface IUser extends mongoose.Document {
  IUser: { id: string; name: string };
}
