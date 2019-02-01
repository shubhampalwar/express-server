import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs';
class TraineeController {
  public static getInstance() {
    if (!TraineeController.trainee) {
      TraineeController.trainee = new TraineeController();
    }
    return TraineeController.trainee;
  }
  private static trainee: TraineeController;
  public get(req: Request, res: Response) {
    const data = [
      {
        Id: 1,
        Name: 'trainee1',
      },
      {
        Id: 2,
        Name: 'trainee2',
      },
    ];
    res
      .status(200)
      .send(successHandler('Trainee fetched successfully', 200, data));
  }

  public create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = {
      ID: id,
      Name: name,
    };
    res
      .status(202)
      .send(successHandler('Trainee created successfully', 202, data));
  }

  public update(req: Request, res: Response, next) {
    const { dataToUpdate, id } = req.body;

    const data = {
      Id: id,
      dTU: dataToUpdate,
    };
    res
      .status(200)
      .send(successHandler('Trainee Modified successfully', 202, data));
  }

  public delete(req: Request, res: Response, next) {
    const { id } = req.params;
    const data = {
      Id: id,
    };
    res
      .status(200)
      .send(successHandler('Trainee Deleted successfully', 202, data));
  }
}
export default TraineeController.getInstance();
