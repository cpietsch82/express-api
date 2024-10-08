import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";

let globalConfig: any = {};

if (stage === "production") {
  globalConfig = require("./production").default;
} else if (stage === "staging") {
  globalConfig = require("./staging").default;
} else {
  globalConfig = require("./local").default;
}

const defaultConfig = {
  stage,
  logging: false,
  database: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  api: {
    port: process.env.PORT,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
};

export default merge(defaultConfig, globalConfig);
