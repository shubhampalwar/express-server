import { Router } from "express";
import trainee from "./Controller";
import validationHandler from '../../libs/routes/validationHandler'
import validation from './validation'
import authMiddleWare from "../../libs/routes/authMiddleWare";
const traineeRouter = Router();
traineeRouter
  .get("/", validationHandler(validation.get),authMiddleWare('traineee','read'), trainee.get)
  .post("/", validationHandler(validation.create),authMiddleWare('traineee','write') ,trainee.create)
  .put("/",validationHandler(validation.update),authMiddleWare('traineee','write') , trainee.update)
  .delete("/:id", validationHandler(validation.delete),authMiddleWare('traineee','delete') , trainee.delete);
export default traineeRouter;
