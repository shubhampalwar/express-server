import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config';
import { Database, errorHandler, notFoundRoute } from './libs';
import router from './Router';

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

  public setupRoutes() {
    const {
      app,
      config: { port },
    } = this;

    app.use('/health-check', (req, res) => {
      res.send(`I am OK.<br>App running on ${port}`);
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  public run() {
    const {
      app,
      config: { port, mongo_url },
    } = this;
    Database.open(mongo_url)
      .then((resolve) => {
        console.log('Connected successfully to mongo');
        app.listen(port, (err: Error) => {
          if (err) {
            throw err;
          }
          console.log(`App is running at port: ${port}`);
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}

export default Server;
