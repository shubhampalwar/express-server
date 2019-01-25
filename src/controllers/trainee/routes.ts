import { Request, Response, Router } from "express";
import trainee from "./Controller";

const traineeRouter = Router();
traineeRouter
  .get("/", trainee.get)
  .post("/", trainee.create)
  .put("/", trainee.update)
  .delete("/:id", trainee.delete);
export default traineeRouter;
