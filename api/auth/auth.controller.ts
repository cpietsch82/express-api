import { Request, Response } from "express";
import prisma from "../lib/database/db.connection";
import { createJWT, hashPassword, validatePassword } from "../lib/modules/auth";
import { randomUUID } from "crypto";

/**
 * creates a new user
 * @param {Request} req
 * @param {Response} res
 */
export const signUp = async (req: Request, res: Response) => {
  // try {
  const user = await prisma.user.create({
    data: {
      name: randomUUID(),
      email: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.json({ token });
  // } catch (e) {
  //   console.error(e);
  //   res.status(401).json({ message: "Email is already used" });
  // }
};

/**
 * sign in method for a user
 * @param {Request} req
 * @param {Response} res
 */
export const signIn = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  const isPasswordValid = await validatePassword(
    req.body.password,
    user?.password as string
  );
  if (!isPasswordValid) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
