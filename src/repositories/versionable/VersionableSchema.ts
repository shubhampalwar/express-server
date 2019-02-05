import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(baseSchema, options: any) {
    const versionSchema = Object.assign(baseSchema, {
      createdAt: {
        default: Date.now(),
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    });
    super(versionSchema, options);
  }
}
