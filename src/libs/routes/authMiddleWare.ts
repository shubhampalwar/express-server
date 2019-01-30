import hasPermission from "./permissions";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
export default (moduleName: string, permissionType: string) => (
  req: Request,
  res: Response,
  next
) => {
  const token: string = req.headers["authorization"];
  let decode;
  try {
    decode = jwt.verify(token, process.env.KEY);
  } catch {
    return next({
      error: "FORBIDDEN",
      status: 403,
      message: "Authentication failed"
    });
  }
  const { role } = decode;
  if (!hasPermission(moduleName, role, permissionType)) {
    return next({
      error: "Access Denied",
      status: 403,
      message: `${role} does not have permission for ${permissionType} in ${moduleName}`
    });
  }
  next();
};
