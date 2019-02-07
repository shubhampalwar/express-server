import { Router } from 'express';
import { authMiddleWare, traineeModule, validationHandler } from '../../libs';
import trainee from './Controller';
import validation from './validation';
const traineeRouter = Router();
traineeRouter
  .post('/login', validationHandler(validation.login), trainee.login)
  .get('/getlist',
  validationHandler(validation.get),
  authMiddleWare(traineeModule, 'read'),
  trainee.getList)
  .get(
    '/',
    validationHandler(validation.get),
    authMiddleWare(traineeModule, 'read'),
    trainee.get,
  )
  .post(
    '/',
    validationHandler(validation.create),
    authMiddleWare(traineeModule, 'write'),
    trainee.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    authMiddleWare(traineeModule, 'write'),
    trainee.update,
  )
  .delete(
    '/:id',
    validationHandler(validation.delete),
    authMiddleWare(traineeModule, 'delete'),
    trainee.delete,
  );
export default traineeRouter;
