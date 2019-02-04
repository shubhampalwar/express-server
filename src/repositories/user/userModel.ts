import * as mongoose from 'mongoose';
import iUser from './IUserModel';
import UserSchema from './UserSchema';

const userSchema = new UserSchema({ Collection: 'User' });
export const userModel: mongoose.Model<iUser> = mongoose.model<iUser>(
  'User',
  userSchema,
  'User',
  true,
);
