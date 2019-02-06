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
  public genericCreate(data): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return this.model.create({ ...data, _id: id, originalId: id });
  }
  public countDocuments(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public genericUpdate(query, change): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return this.findOne({...query, deletedAt: {$exists: false}})
      .then((result) => {
        const updateData = Object.assign(result, change);
        return this.model.create({ ...updateData, _id: id })
      }) .then((res) => {
        return this.model.updateOne({...query, deletedAt: {$exists: false}}, { deletedAt: Date.now() });
      }).catch((err) => {
        console.log('not found', err);
        return err;
      });
  }
  public genericDelete(query) {
    console.log(query);
    return this.model.updateOne({...query, deletedAt: {$exists: false}}, { deletedAt: Date.now() }).then((res) => {
      console.log('res', res);
    });
  }
}
