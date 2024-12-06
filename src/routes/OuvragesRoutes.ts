import { Router } from "express";
import {
    createOuvrages,
    getAllOuvrages,
    getOuvragesById,
    updateOuvrages,
    deleteOuvrages

} from "../controllers/taskController";

const router = Router();
router.post("/", createOuvrages);
router.get("/", getAllOuvrages);
router.get("/:id", getOuvragesById);
router.put("/:id", updateOuvrages);
router.delete("/:id", deleteOuvrages);

export default router;


