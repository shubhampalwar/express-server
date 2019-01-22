import { IConfig } from "./config";
import * as express from "express";
class Server {
  public app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const {
      app,
      config: { port }
    } = this;
    app.use("/health-check", (req, res) => {
      res.send(`I am OK.\nApp running on ${port}`);
    });
  }
  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, (err: Error) => {
      if (err) {
        throw err;
      }
      console.log(`App is running at port: ${port}`);
    });
  }
}
export default Server;
