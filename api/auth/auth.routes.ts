import { Router } from "express";
import { signUp, signIn } from "./auth.controller";
import { asyncErrorHander } from "../lib/middleware/errorhandler.middleware";

const router = Router();

router.post("/auth/sign-up", asyncErrorHander(signUp));

router.post("/auth/sign-in", asyncErrorHander(signIn));

export default router;
