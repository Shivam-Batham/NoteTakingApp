import { asyncHandler } from "../utils/ayncHandler.js";
import Note from "../Models/noteSchema.js";


const createNote = asyncHandler(async (req,res)=>{
    const {author, title, content} = req.body
        console.log("req",req);
        console.log("res",res);
        if (!title || !author){
            return res.status(400).json({msg: 'Please enter all fields'})
        }
        try{
            const newNote = new Note({
                author,
                title,
                content
            })
            const savedNote = await newNote.save();
            console.log("note created");
            res.status(201).json(savedNote);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message})
        }
}) 
const allNotes = asyncHandler(async (req,res)=>{
    console.log("allnote exexuted");
    try{
        const allNotes = await Note.find();
        
        console.log("note listed");
        res.status(201).json(allNotes);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message})
    }
})

const deleteNote = asyncHandler(async (req,res)=>{
    const id = req.body.id;
    const note = await Note.findById(id);
  if (!note) { 
    return res.status(500).json({
        success: failed,
        message: "note not found",
      });
  }
  await note.deleteOne();
  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
})

const updateNote = asyncHandler(async (req,res)=>{
    let note = await Note.findById(req.body.id);
    
    if (!note) {
      return res.status(500).json({
        success: failed,
        message: "note not found",
      });
    }
    // if note found
    note = await Note.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
    });
  
    //update status
    res.status(200).json({
      success: true,
      message: "updated successfully",
      note,
    });
  });  
export {createNote,allNotes, deleteNote,updateNote}






 