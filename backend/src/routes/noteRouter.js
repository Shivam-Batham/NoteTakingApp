import { Router } from "express";
import { createNote } from "../controller/noteController.js";

const router = Router()

router.route("/createnote").post(createNote);
router.route("/editnote").put(createNote);
router.route("/deletenote").delete(createNote);

export default router;