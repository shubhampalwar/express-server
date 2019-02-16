import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';

const userSchema = new UserSchema({ Collection: 'User' });
const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
  'User',
  userSchema,
  'User',
  true,
);
export default userModel;
