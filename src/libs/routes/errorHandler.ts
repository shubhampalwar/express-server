import { Request, Response, NextFunction } from "express";
export default (err, req: Request, res: Response, next: NextFunction) => {
  console.log("inside error handler")
  if (res.headersSent) {
    return next(err);
  }
  const { error, message, status } = err;
  res.status(status).json({
    Error: error || "Undefined",
    Message: message || "Error Occurred",
    Status: status || "Undefined",
    Timestamp: new Date()
  });
  next();
};
