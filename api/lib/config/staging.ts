export default {
  database: {
    url: process.env.DATABASE_URL,
  },
  api: {
    port: process.env.API_PORT,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
};
