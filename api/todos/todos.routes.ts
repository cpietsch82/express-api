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
import { asyncErrorHander } from "../lib/middleware/errorhandler.middleware";

const router = Router();

router.get(
  "/todos",
  checkSchema({
    ...findTodosValidation.inBody,
  }),
  handleValidationErrors,
  asyncErrorHander(findTodos)
);
router.get(
  "/todos/:id",
  checkSchema({
    ...findTodoValidation.inParams,
  }),
  handleValidationErrors,
  asyncErrorHander(findTodo)
);
router.post(
  "/todos",
  checkSchema({ ...createTodoValidation.inBody }),
  handleValidationErrors,
  asyncErrorHander(createTodo)
);
router.put(
  "/todos/:id",
  checkSchema({
    ...updateTodoValidation.inParams,
    ...updateTodoValidation.inBody,
  }),
  handleValidationErrors,
  asyncErrorHander(updateTodo)
);
router.delete(
  "/todos/:id",
  checkSchema({ ...removeTodoValidation.inParams }),
  handleValidationErrors,
  asyncErrorHander(removeTodo)
);

export default router;
