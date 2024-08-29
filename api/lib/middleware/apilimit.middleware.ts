import rateLimit from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import { createClient } from "redis";
import config from "../config";

// Create a `node-redis` client
const client = createClient({
  socket: {
    port: config.redis.port,
    host: config.redis.host,
    reconnectStrategy: (retries) => Math.min(retries * 50, 1000),
  },
});

async function connectToRedis() {
  // Then connect to the Redis server
  await client.connect();
}
connectToRedis();

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Redis store configuration
  store: new RedisStore({
    sendCommand: (...args: string[]) => client.sendCommand(args),
  }),
});
