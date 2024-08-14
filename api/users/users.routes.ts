import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  console.log("Liste aller Users");
  res.status(200);
  res.json({ users: [] });
});
router.get("/users/:id", (req, res) => {});
router.put("/users/:id", (req, res) => {});
router.delete("/users/:id", (req, res) => {});

export default router;
