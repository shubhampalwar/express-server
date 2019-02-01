import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import hasPermission from './permissions';
export default (moduleName: string, permissionType: string) => (
  req: Request,
  res: Response,
  next,
) => {
  const token: string = req.headers.authorization;
  let decode;
  try {
    decode = jwt.verify(token, process.env.KEY);
  } catch {
    return next({
      error: 'FORBIDDEN',
      message: 'Authentication failed',
      status: 403,
    });
  }
  const { role } = decode;
  if (!hasPermission(moduleName, role, permissionType)) {
    return next({
      error: 'Access Denied',
      message: `${role} does not have permission for ${permissionType} in ${moduleName}`,
      status: 403,
    });
  }
  next();
};
