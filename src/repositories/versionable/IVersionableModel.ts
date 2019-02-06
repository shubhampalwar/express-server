import * as mongoose from 'mongoose';
export default interface IVersionable extends mongoose.Document {
 originalId: string; deletedAt: Date; createdAt: Date;
}
