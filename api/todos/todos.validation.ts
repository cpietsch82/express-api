import { ParamSchema } from "express-validator";

enum TODO_STATUS {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

export const findTodosValidation = {
  inBody: {
    skip: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (isNaN(value)) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "skip needs to be a number",
    } as ParamSchema,
    limit: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (isNaN(value)) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "limit needs to be a number",
    } as ParamSchema,
  },
};

export const findTodoValidation = {
  inParams: {
    id: {
      in: ["params"],
      custom: {
        options: (value) => {
          if (isNaN(parseInt(value))) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "ID is required",
    } as ParamSchema,
  },
};

export const createTodoValidation = {
  inBody: {
    todo: {
      in: ["body"],
      custom: {
        options: (value) => {
          if (value === undefined || value === "") {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "Todo needs content",
    } as ParamSchema,
    status: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (!Object.keys(TODO_STATUS).includes(value)) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: `status has to be on of the following values ${Object.keys(
        TODO_STATUS
      )}`,
    } as ParamSchema,
  },
};

export const updateTodoValidation = {
  inParams: {
    id: {
      in: ["params"],
      custom: {
        options: (value) => {
          if (isNaN(parseInt(value))) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "ID is required",
    } as ParamSchema,
  },
  inBody: {
    todo: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (typeof value !== "string") {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "Content needs to be a string",
    } as ParamSchema,
    doneAt: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (!(value instanceof Date)) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "doneAt has to be a DateTime",
    } as ParamSchema,
    status: {
      optional: true,
      in: ["body"],
      custom: {
        options: (value) => {
          if (!Object.keys(TODO_STATUS).includes(value)) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: `status has to be on of the following values ${Object.keys(
        TODO_STATUS
      )}`,
    } as ParamSchema,
  },
};

export const removeTodoValidation = {
  inParams: {
    id: {
      in: ["body"],
      custom: {
        options: (value) => {
          if (isNaN(parseInt(value))) {
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
      errorMessage: "ID is required",
    } as ParamSchema,
  },
};
