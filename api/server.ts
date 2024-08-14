import express from "express";
import userRoutes from "./users/users.routes";
import todoRoutes from "./todos/todos.routes";
import authRoutes from "./auth/auth.routes";
import morgan from "morgan";
import cors from "cors";
import { authentication } from "./lib/middleware/authentication.middleware";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
// logging stuff with morgan
app.use(morgan("dev"));
// enable json to send back from client
app.use(express.json());
// allows the client to add query string and parameters (decode and encode properly)
app.use(express.urlencoded({ extended: true }));
// add CORS Header
app.use(cors());

app.use("/api/v1", authRoutes);
app.use("/api/v1", authentication, userRoutes);
app.use("/api/v1", authentication, todoRoutes);

app.listen(process.env.API_PORT, () => {
  console.log(`Server listen on port ${process.env.API_PORT}`);
});
