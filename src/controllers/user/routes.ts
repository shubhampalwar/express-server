import { Router } from 'express';
import { userModule } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import user from './Controller';
import validation from './validation';
const userRouter = Router();
userRouter
  .post('/login', validationHandler(validation.login), user.login)
  .get(
    '/',
    validationHandler(validation.get),
    authMiddleWare(userModule, 'read'),
    user.get,
  )
  .post(
    '/',
    validationHandler(validation.create),
    authMiddleWare(userModule, 'write'),
    user.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    authMiddleWare(userModule, 'write'),
    user.update,
  )
  .delete(
    '/:id',
    validationHandler(validation.delete),
    authMiddleWare('user module', 'delete'),
    user.delete,
  );
export default userRouter;
