import * as mongoose from 'mongoose';
import seedDate from './seedData';
export default class Database {
  public static open(mongoUri: string) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUri,
          { useNewUrlParser: true },
        )
        .then((result) => {
          seedDate();
          return resolve('Connected successfully to mongo');
        });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
