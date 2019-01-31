import { Request, Response, NextFunction } from "express";
import { successHandler } from '../../libs'
class UserController {
  private static user: UserController;
  public static getInstance() {
    if (!UserController.user) {
      UserController.user = new UserController();
    }
    return UserController.user;
  }
  get(req: Request, res: Response) {
    const data = [
      {
        Name: "user1",
        Id: 1
      },
      {
        Name: "user2",
        Id: 2
      }
    ];
    res
      .status(200)
      .send(successHandler("user fetched successfully", 200, data));
  }

  create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = {
      Name: name,
      ID: id
    };
    res
      .status(202)
      .send(successHandler("user created successfully", 202, data));
  }

  update(req: Request, res: Response, next) {
    const { dataToUpdate, id } = req.body;

    const data = {
      dTU: dataToUpdate,
      Id: id
    };
    res
      .status(200)
      .send(successHandler("user Modified successfully", 202, data));
  }

  delete(req: Request, res: Response, next) {
    const { id } = req.params;
    const data = {
      Id: id
    };
    res
      .status(200)
      .send(successHandler("user Deleted successfully", 202, data));
  }
}
export default UserController.getInstance();
