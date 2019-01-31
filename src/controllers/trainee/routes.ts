import { Router } from "express";
import trainee from "./Controller";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const traineeRouter = Router();
traineeRouter
  .get(
    "/",
    validationHandler(validation.get),
    authMiddleWare("trainee module", "read"),
    trainee.get
  )
  .post(
    "/",
    validationHandler(validation.create),
    authMiddleWare("trainee module", "write"),
    trainee.create
  )
  .put(
    "/",
    validationHandler(validation.update),
    authMiddleWare("trainee module", "write"),
    trainee.update
  )
  .delete(
    "/:id",
    validationHandler(validation.delete),
    authMiddleWare("trainee module", "delete"),
    trainee.delete
  );
export default traineeRouter;
