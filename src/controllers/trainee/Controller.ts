import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class TraineeController {
  get(req: Request, res: Response) {
    const data = [
      {
        Name: "trainee1",
        Id: 1
      },
      {
        Name: "trainee2",
        Id: 2
      }
    ];
    res
      .status(200)
      .send(successHandler("Trainee fetched successfully", "OK", 200, data));
  }

  post(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    if (!name || !id) {
      return next({
        error: "Bad Request",
        message: "Name and Id Required",
        status: "400"
      });
    }
    if (!name) {
      return next({
        error: "Bad Request",
        message: "Name Required",
        status: "400"
      });
    }
    if (!id) {
      return next({
        error: "Bad Request",
        message: "Id Required",
        status: "400"
      });
    }
    const data = {
      Name: name,
      Id: id
    };
    res
      .status(202)
      .send(successHandler("Trainee created successfully", "OK", 202, data));
  }

  put(req: Request, res: Response, next) {
    const { name, id } = req.body;
    if (!name || !id) {
      return next({
        error: "Bad Request",
        message: "Name or Id Required",
        status: "400"
      });
    }
    const data = {
      Name: name,
      Id: id
    };
    res
      .status(200)
      .send(successHandler("Trainee Modified successfully", "OK", 202, data));
  }

  delete(req: Request, res: Response, next) {
    const { name, id } = req.body;
    if (!name || !id) {
      return next({
        error: "Bad Request",
        message: "Name or Id Required",
        status: "400"
      });
    }
    const data = {
      Name: name,
      Id: id
    };
    res
      .status(200)
      .send(successHandler("Trainee Deleted successfully", "OK", 202, data));
  }
}

const trainee = new TraineeController();
Object.freeze(trainee);
export default trainee;
