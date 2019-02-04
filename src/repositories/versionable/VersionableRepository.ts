import * as mongoose from 'mongoose';

export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  protected model: mongoose.Model<D>;
  constructor(Model) {
    this.model = Model;
  }
  public genericCreate(): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    return this.model.create({_id: id, originalId: id});
  }
  public genericUpdate() {
    const id = VersionableRepository.generateObjectID();

  }
}
