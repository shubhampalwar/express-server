import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default (moduleName: string, permissionType: string) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userRepository: UserRepository = new UserRepository();
  const token: string = req.headers.authorization;
  let userDecode;
  try {
    userDecode = jwt.verify(token, process.env.KEY);
  }
  catch {
    return next({
          error: 'FORBIDDEN',
          message: 'Authentication failed',
          status: 403,
        });
  }
  userRepository
    .findOne({ _id: userDecode.id })
    .then((result) => {
      const { role } = result;
      if (!hasPermission(moduleName, role, permissionType)) {
        return next({
          error: 'Access Denied',
          message: `${role} does not have permission for ${permissionType} in ${moduleName}`,
          status: 403,
        });
      }
      req.body.data = Object.assign(result);
      next();
    })
    .catch((err) => {
      console.log('error', err);
    });
};
