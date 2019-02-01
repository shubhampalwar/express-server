import { NextFunction, Request, Response } from 'express';
export default function notFoundRoute(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return next({
    error: 'not found',
    message: 'Not Found Route',
    status: '404',
  });
}
