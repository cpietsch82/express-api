import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * middleware to handle validation errors in an express application
 *
 * It uses the express-validator library to check for validation erros in the current request.
 * If any validation errors occured, it responds with a 422 status and sends the errors as a JSON response back.
 *
 * This middleware is typically used in conjunction with the `checkSchema` function from `express-validator`,
 * which defines the validation rules for the request.
 */
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.debug(
      `Error in handleValidationErrors, errors.array() = ${JSON.stringify(
        errors.array()
      )}`
    );
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
