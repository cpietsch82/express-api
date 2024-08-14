import { Router } from "express";
import { checkSchema } from "express-validator";
import {
  createTodo,
  findTodo,
  findTodos,
  removeTodo,
  updateTodo,
} from "./todos.controller";
import {
  createTodoValidation,
  findTodosValidation,
  findTodoValidation,
  removeTodoValidation,
  updateTodoValidation,
} from "./todos.validation";
import { handleValidationErrors } from "./../lib/middleware/validation.middleware";

const router = Router();

router.get(
  "/todos",
  checkSchema({
    ...findTodosValidation.inBody,
  }),
  handleValidationErrors,
  findTodos
);
router.get(
  "/todos/:id",
  checkSchema({
    ...findTodoValidation.inParams,
  }),
  handleValidationErrors,
  findTodo
);
router.post(
  "/todos",
  checkSchema({ ...createTodoValidation.inBody }),
  handleValidationErrors,
  createTodo
);
router.put(
  "/todos/:id",
  checkSchema({
    ...updateTodoValidation.inParams,
    ...updateTodoValidation.inBody,
  }),
  handleValidationErrors,
  updateTodo
);
router.delete(
  "/todos/:id",
  checkSchema({ ...removeTodoValidation.inParams }),
  handleValidationErrors,
  removeTodo
);

export default router;
