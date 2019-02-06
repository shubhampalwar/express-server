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
  public genericCreate(data): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return this.model.create({ ...data, _id: id, originalId: id });
  }
  public countDocuments(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public genericUpdate(data): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return this.model.create({ ...data, _id: id });
  }
  public genericDelete(query) {
    console.log(query);
    return this.model.updateOne({...query, deletedAt: {$exists: false}}, { deletedAt: Date.now() }).then((res) => {
      console.log('res', res);
    });
  }
}
