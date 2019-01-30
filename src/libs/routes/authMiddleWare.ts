import hasPermission from "./permissions";
import * as jwt from "jsonwebtoken";
export default (moduleName, permissionType) => (req, res, next) => {
  const token: string = req.headers["authorization"];
  let decode;
  try {
    decode = jwt.verify(token, process.env.KEY);
  } catch {
    return next({
      error: "FORBIDDEN",
      status: 403,
      message: "Unauthorized Access"
    });
  }
  const { role } = decode;
  if(!hasPermission(moduleName,role,permissionType,)){
    return next({
      error: 'Access Denied',
      status: 403,
      message: `${role} does not have permission for ${permissionType} in ${moduleName}`
    })
  }
  next();
};
