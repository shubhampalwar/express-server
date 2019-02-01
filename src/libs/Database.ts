import * as mongoose from "mongoose";
import seedDate from "./seedData";
export default class Database {
  static open(mongo_uri: string) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongo_uri,
          { useNewUrlParser: true }
        )
        .then(result => {
          console.log("Connected successfully to mongo");
          seedDate();
          return resolve("hello");
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}
