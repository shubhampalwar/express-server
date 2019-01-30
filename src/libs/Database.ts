import * as mongoose from "mongoose";
import { getMaxListeners } from "cluster";
export default class Database {
  static open(mongo_uri) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongo_uri,
          { useNewUrlParser: true }
        )
        .then(result => {
          console.log("Connected successfully to mongo");
          const Employee = mongoose.model("Employee", {
            name: String,
            emp_id: String,
            ph_no: String,
            email_id: String,
            add: String
          });

          const Employee1 = new Employee({ name: "Shubham Palwar", emp_id: "SD0010", ph_no: "9876543210", email_id:"xyz@gmail.com", add: "South Delhi"});
          Employee1.save().then(() => console.log("details saved"));
          return resolve("Hello");
        })
        .catch(err => {
          if (err) {
            return reject(err);
          }
        });
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}
