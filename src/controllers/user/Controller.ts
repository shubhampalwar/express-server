import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
  public static getInstance() {
    if (!UserController.user) {
      UserController.user = new UserController();
    }
    return UserController.user;
  }
  private static user: UserController;
  public get(req: Request, res: Response) {
    const { data } = req.body;
    res
      .status(200)
      .send(successHandler('user fetched successfully', 200, data));
  }

  public create(req: Request, res: Response, next: NextFunction) {
    const { name: bodyName, email: bodyEmail, role: bodyRole } = req.body;
    const userRepository = new UserRepository();
    const data = {
      email: bodyEmail,
      name: bodyName,
      role: bodyRole,
    };
    userRepository.create(data);
    res
      .status(202)
      .send(successHandler('user created successfully', 202, data));
  }

  public update(req: Request, res: Response, next) {
    const { dataToUpdate: bodyDate, id: bodyId } = req.body;

    const data = {
      dTU: bodyDate,
      id: bodyId,
    };
    const userRepository = new UserRepository();
    userRepository.updateOne({ _id: bodyId }, bodyDate);
    res
      .status(200)
      .send(successHandler('user Modified successfully', 202, data));
  }

  public delete(req: Request, res: Response, next) {
    const { id } = req.params;
    const userRepository = new UserRepository();
    userRepository.deleteOne({ _id: id });
    const data = {
      Id: id,
    };
    res
      .status(200)
      .send(successHandler('user Deleted successfully', 202, data));
  }
}
export default UserController.getInstance();
