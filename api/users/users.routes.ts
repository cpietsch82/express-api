import { Router } from "express";
import { asyncErrorHander } from "../lib/middleware/errorhandler.middleware";

const router = Router();

router.get(
  "/users",
  asyncErrorHander(async (req, res) => {
    await Promise.reject(new Error("TEST ERROR"));
    console.log("Liste aller Users");
    res.status(200);
    res.json({ users: [] });
  })
);
router.get("/users/:id", (req, res) => {});
router.put("/users/:id", (req, res) => {});
router.delete("/users/:id", (req, res) => {});

export default router;
