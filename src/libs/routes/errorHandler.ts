import { Request, Response, NextFunction } from "express";
export default function errorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error, message, status } = err;
  res.status(status).json({
    Error: error || "Undefined",
    Message: message || "Error Occurred",
    Status: status || "Undefined",
    Timestamp: new Date()
  });
  next();
}
