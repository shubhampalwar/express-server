import { Request, Response, NextFunction } from "express";
import { successHandler } from '../../libs'
class TraineeController {
  private static trainee: TraineeController;
  public static getInstance() {
    if (!TraineeController.trainee) {
      TraineeController.trainee = new TraineeController();
    }
    return TraineeController.trainee;
  }
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
      .send(successHandler("Trainee fetched successfully", 200, data));
  }

  create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = {
      Name: name,
      ID: id
    };
    res
      .status(202)
      .send(successHandler("Trainee created successfully", 202, data));
  }

  update(req: Request, res: Response, next) {
    const { dataToUpdate, id } = req.body;

    const data = {
      dTU: dataToUpdate,
      Id: id
    };
    res
      .status(200)
      .send(successHandler("Trainee Modified successfully", 202, data));
  }

  delete(req: Request, res: Response, next) {
    const { id } = req.params;
    const data = {
      Id: id
    };
    res
      .status(200)
      .send(successHandler("Trainee Deleted successfully", 202, data));
  }
}
export default TraineeController.getInstance();
