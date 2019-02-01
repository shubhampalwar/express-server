import { NextFunction, Request, Response } from 'express';
export default (err, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  const { error, message, status } = err;
  const errorMsg = {
    Error: error || 'Undefined',
    Message: message || 'Error Occurred',
    Status: status || 200,
    Timestamp: new Date(),
  };
  res.status(status).send(errorMsg);
  next();
};
