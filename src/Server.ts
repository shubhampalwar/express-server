import { IConfig } from "./config";
import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundRoute, errorHandler } from "./libs";
class Server {
  public app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public setupRoutes() {
    const {
      app,
      config: { port }
    } = this;

    app.use("/health-check", (req, res) => {
      res.send(`I am OK.<br>App running on ${port}`);
    });
    app.use(notFoundRoute);
    app.use(errorHandler);
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
