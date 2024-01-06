import { Router } from "express";
import { allNotes, createNote, deleteNote, updateNote } from "../controller/noteController.js";

const router = Router()

router.route("/allnotes").get(allNotes);

router.route("/createnote").post(createNote);
router.route("/updatenote/:id").put(updateNote);
router.route("/deletenote/:id").delete(deleteNote);

export default router;