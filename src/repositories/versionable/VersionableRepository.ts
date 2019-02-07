import * as mongoose from 'mongoose';
export default class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  protected model: mongoose.Model<D>;
  constructor(Model) {
    this.model = Model;
  }
  public findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(query).lean();
  }
  public async genericCreate(data): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return await this.model.create({ ...data, _id: id, originalId: id });
  }
  public countDocuments(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public async genericUpdate(query, change): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    let result: any = await this.findOne({...query, deletedAt: {$exists: false}});
    if (result) {
      const updateData = await Object.assign(result, change);
      result = await this.model.create({ ...updateData, _id: id });
      if (result) {
        return await this.model.updateOne({...query, deletedAt: {$exists: false}}, { deletedAt: Date.now() });
      }
    }
  }
  public async genericDelete(query) {
    return await this.model.updateOne({...query, deletedAt: {$exists: false}}, { deletedAt: Date.now() });

  }
}
