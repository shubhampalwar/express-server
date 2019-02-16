import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
 originalId: string; deletedAt: Date; createdAt: Date;
}
