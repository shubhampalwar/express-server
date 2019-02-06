import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config';
import { Database, errorHandler, notFoundRoute } from './libs';
import seedData from './libs/seedData';
import router from './Router';

class Server {
  public app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
    try {
      this.initBodyParser();
      this.setupRoutes();
      return this;
    }
    catch (err) {
      console.log('error', err);
    }
  }

  public setupRoutes() {
    try {
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
    catch (err) {
      console.log('error', err);
    }
  }

  public async run() {
    try {
      const {
        app,
        config: { port, mongo_url },
      } = this;
      const result = await Database.open(mongo_url);
      if (result) {
        console.log(result);
        app.listen(port, (err: Error) => {
              if (err) {
                throw err;
              }
              console.log(`App is running at port: ${port}`);
            });
      }
    }
    catch (err) {
      console.log('error', err);
    }
  }

  private initBodyParser() {
    try {
      const { app } = this;
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
    }
    catch (err) {
      console.log('error', err);
    }
  }
}

export default Server;
