export default {
  database: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  api: {
    port: process.env.API_PORT,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
};
