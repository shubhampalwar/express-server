import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { hashPassword, successHandler } from '../../libs';
import { UserRepository } from '../../repositories';
class TraineeController {
  public static getInstance() {
    if (!TraineeController.trainee) {
      TraineeController.trainee = new TraineeController();
    }
    return TraineeController.trainee;
  }
  private static trainee: TraineeController;
  public get(req: Request, res: Response) {
    try {
      const { data } = req.body;
      res.status(200).send(successHandler('user fetched successfully', 200, data));
    }
    catch (err) {
      console.log('Error', err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name: bodyName, email: bodyEmail, role: bodyRole } = req.body;
      const userRepository = new UserRepository();
      const data = {
      email: bodyEmail,
      name: bodyName,
      password: await hashPassword(),
      role: bodyRole,
    };
      const result = await userRepository.create(data);
      if (! result) {
        return next({
          error: 'Error Occurred',
          message: 'Creation Failed',
          status: 400,
        });
      }
      res.status(202).send(successHandler('user created successfully', 202, result));
    } catch (err) {
      console.log('Error', err);
    }
  }

  public async update(req: Request, res: Response, next) {
    try {
      const { dataToUpdate: bodyDate, id: bodyId } = req.body;
      const data = {
        dTU: bodyDate,
        id: bodyId,
      };
      const userRepository = new UserRepository();
      const result = await userRepository.updateOne({ originalId: bodyId }, bodyDate);
      if (!result) {
        return next({
          error: 'Error Occurred',
          message: 'Updating Failed',
          status: 400,
        });
      }
      res.status(200).send(successHandler('user Modified successfully', 202, data));
    }
    catch (err) {
      console.log('Error', err);
    }
  }

  public async delete(req: Request, res: Response, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const userRepository = new UserRepository();
      const result = await userRepository.deleteOne({ originalId: id });
      if (result.n === 0) {
        return next({
          error: 'Error Occurred',
          message: 'Deletion Failed',
          status: 400,
        });
      }
      const data = {
        Id: id,
      };
      res.status(200).send(successHandler('user Deleted successfully', 202, data));
    }
    catch (err) {
      console.log('Error', err);
    }
  }
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
    const { email: bodyEmail, password: bodyPassword} = req.body;
    console.log(`email ${bodyEmail} \npassword ${bodyPassword}`);
    const userRepository = new UserRepository();
    let result = await userRepository.findOne({email: bodyEmail});
    if (!result) {
      return next({
        error: 'login failed',
        message: 'invalid email',
        status: 404,
      });
    }
    const {email: dbEmail, _id: dbId , password: dbPassword} = result;
    result = await bcrypt.compare(bodyPassword, dbPassword);
    if (!result) {
      return next({
        error: 'login failed',
        message: 'invalid password',
        status: 404,
      });
    }
    const token = jwt.sign({
      aud: 'www.successive.in',
      email: dbEmail,
      exp: Math.floor(Date.now() / 1000) + (15 * 60),
      iat: Date.now(),
      id: dbId,
      iss: 'Successive tech',
      sub: 'Learn and Implement',
    }, process.env.KEY);
    res.status(200).send(successHandler('Successfully logged in', 202, `your token : ${token}`));
    }
    catch (err) {
      console.log('Error', err);
    }
  }
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { skip: querySkip, limit: queryLimit, ...query} = req.query;
      const userRepository = new UserRepository();
      const result = await userRepository.find(query, '-_id name email role',
      {skip: parseInt(querySkip, 10), limit: parseInt(queryLimit, 10) });
      if (!result) {
        return next({
          error: 'not found',
          message: 'user does,t exists',
          status: 404,
        });
       }
      const count = await userRepository.count(query);
      const data = {
        Count: count,
        Result: result,
      };
      res.status(200).send(successHandler('Successfully logged in', 202, data));
    }
    catch (err) {
      console.log('Error', err);
    }
  }
}
export default TraineeController.getInstance();
