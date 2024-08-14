import jwt, { Secret } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export interface RequestWithUser extends Request {
  user: any;
}

export const authentication = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  // if bearer token doesnt exist
  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  // if token is empty
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  try {
    // bind user to request for further processing
    const payload = jwt.verify(token, process.env.JWT_SECRET as Secret);
    req.user = payload;
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized");
    return;
  }
};
