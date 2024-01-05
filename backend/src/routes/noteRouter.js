import { Router } from "express";
import { allNotes, createNote } from "../controller/noteController.js";

const router = Router()

router.route("/allnotes").get(allNotes);

router.route("/createnote").post(createNote);
router.route("/editnote").put(createNote);
router.route("/deletenote").delete(createNote);

export default router;