import { Router } from "express";
import user from "./Controller";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
import { userModule } from "../../libs/constants"
const userRouter = Router();
userRouter
  .get(
    "/",
    validationHandler(validation.get),
    authMiddleWare(userModule, "read"),
    user.get
  )
  .post(
    "/",
    validationHandler(validation.create),
    authMiddleWare(userModule, "write"),
    user.create
  )
  .put(
    "/",
    validationHandler(validation.update),
    authMiddleWare(userModule, "write"),
    user.update
  )
  .delete(
    "/:id",
    validationHandler(validation.delete),
    authMiddleWare("user module", "delete"),
    user.delete
  );
export default userRouter;
