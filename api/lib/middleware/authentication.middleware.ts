import jwt, { Secret } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export interface RequestWithUser extends Request {
  user: any;
}

/**
 * Authentication middleware to check if user is authorized
 * @param {Request} req - request object with user context
 * @param {Response} res - response object
 * @param {NextFunction} next - next function
 * @returns void
 */
export const authentication = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  // if bearer token doesnt exist
  if (!bearer) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  // if token is empty
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  try {
    // bind user to request for further processing
    const payload = jwt.verify(token, process.env.JWT_SECRET as Secret);
    req.user = payload;
    next();
    return;
  } catch (e) {
    res.status(401).json({ message: "Not authorized", details: e });
    return;
  }
};
