import * as mongoose from 'mongoose';
export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      name: String,
      name2: String,
    };

    super(baseSchema, options);
  }
}
