import { Router } from 'express';
import { authMiddleWare, userModule, validationHandler } from '../../libs';
import user from './Controller';
import validation from './validation';
const userRouter = Router();
userRouter
  .post('/login', validationHandler(validation.login), user.login)
  .get('/getlist',
  validationHandler(validation.get),
  authMiddleWare(userModule, 'read'),
  user.getList)
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
