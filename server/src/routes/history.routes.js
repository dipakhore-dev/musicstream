import { Router } from "express";
import { clearHistory, listHistory } from "../controllers/history.controller.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.use(protect);

router.get("/", listHistory);
router.delete("/", clearHistory);

export default router;
