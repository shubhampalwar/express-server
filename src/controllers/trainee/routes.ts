import { Router } from 'express';
import { traineeModule } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import trainee from './Controller';
import validation from './validation';
const traineeRouter = Router();
traineeRouter
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
