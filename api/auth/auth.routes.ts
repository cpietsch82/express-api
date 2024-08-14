import { Router } from "express";
import { signUp, signIn } from "./auth.controller";

const router = Router();

router.post("/auth/sign-up", signUp);

router.post("/auth/sign-in", signIn);

export default router;
