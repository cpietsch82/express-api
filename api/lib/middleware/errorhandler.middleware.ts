import { NextFunction, Request, Response } from "express";

/**
 * handler to handle errors from async functions
 * @param fn - express handler with request, response and nextFunction
 * @returns - invoke nextFunction if error in async function is occured
 */
export function asyncErrorHander<
  ReqType extends Request,
  ResType extends Response
>(fn: (req: ReqType, res: ResType, next: NextFunction) => Promise<void>) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req as ReqType, res as ResType, next).catch(next);
  };
}

/**
 * Error handler middleware to send back an error if something went wrong
 * @param err - Error
 * @param req - Request
 * @param res - Response
 * @param next - NextFunction
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`[API Error] - ${err}`);
  res.status(500).json({
    error: {
      message: `something went wrong`,
      details: err,
    },
  });
};
