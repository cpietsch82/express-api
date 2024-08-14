import { Request, Response } from "express";
import prisma from "../lib/database/db.connection";
import { RequestWithUser } from "../lib/middleware/authentication.middleware";

/**
 * find all todos from a user
 * @param req
 * @param res
 */
export const findTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({
    take: parseInt(req.body.take) | 10,
    skip: parseInt(req.body.skip) | 0,
  });
  res.status(200).json({ data: todos });
};

/**
 * find a specific todo of a user
 * @param req
 * @param res
 */
export const findTodo = async (req: Request, res: Response) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.status(200).json({ data: todo });
};

/**
 * add a new todo for a user
 * @param req
 * @param res
 */
export const createTodo = async (req: RequestWithUser, res: Response) => {
  const todo = await prisma.todo.create({
    data: {
      todo: req.body.todo,
      doneAt: null,
      userId: req.user.id,
    },
  });

  if (todo) {
    res.status(201).json({ data: todo });
  } else {
    res.status(500).json({ message: "something went wrong" });
  }
};

/**
 * updates a todo of a user
 * @param req
 * @param res
 */
export const updateTodo = async (req: Request, res: Response) => {
  const updated = await prisma.todo.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.status(204).json({ data: updated });
};

/**
 * remove a todo of a user
 * @param req
 * @param res
 */
export const removeTodo = async (req: RequestWithUser, res: Response) => {
  const deleted = await prisma.todo.delete({
    where: {
      id: parseInt(req.params.id),
      userId: req.user.id,
    },
  });
  res.status(200).json({ data: deleted });
};
