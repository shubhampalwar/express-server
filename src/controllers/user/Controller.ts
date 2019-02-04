import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs';
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
    const { name, id } = req.body;
    const data = {
      ID: id,
      Name: name,
    };
    res
      .status(202)
      .send(successHandler('user created successfully', 202, data));
  }

  public update(req: Request, res: Response, next) {
    const { dataToUpdate, id } = req.body;

    const data = {
      Id: id,
      dTU: dataToUpdate,
    };
    res
      .status(200)
      .send(successHandler('user Modified successfully', 202, data));
  }

  public delete(req: Request, res: Response, next) {
    const { id } = req.params;
    const data = {
      Id: id,
    };
    res
      .status(200)
      .send(successHandler('user Deleted successfully', 202, data));
  }
}
export default UserController.getInstance();
