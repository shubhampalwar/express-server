import { VersionableSchema } from '../versionable';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };

    super(baseSchema, options);
  }
}
