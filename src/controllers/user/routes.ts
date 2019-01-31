import { Router } from "express";
import user from "./Controller";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const userRouter = Router();
userRouter
  .get(
    "/",
    validationHandler(validation.get),
    authMiddleWare("user module", "read"),
    user.get
  )
  .post(
    "/",
    validationHandler(validation.create),
    authMiddleWare("user module", "write"),
    user.create
  )
  .put(
    "/",
    validationHandler(validation.update),
    authMiddleWare("user module", "write"),
    user.update
  )
  .delete(
    "/:id",
    validationHandler(validation.delete),
    authMiddleWare("user module", "delete"),
    user.delete
  );
export default userRouter;
