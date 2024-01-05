import { asyncHandler } from "../utils/ayncHandler.js";
import Note from "../Models/noteSchema.js";
const createNote = asyncHandler(async (req,res)=>{
    const {author, title, content} = req.body
        console.log(req.body)
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
    res.status(200).json({
        success:true,
        message:"all note"
    });
})

export {createNote,allNotes}

 
// //rout=======
// app.post('/postnote', async(req, res) => {
//     const {title, content} = req.body
//     console.log(req.body)
//     if (!title || !content){
//         return res.status(400).json({msg: 'Please enter all fields'})
//     }
//     try{
//         const newNote = new Note({
//             title,
//             content
//         })
//         const savedNote = await newNote.save()
//         res.json(savedNote)
//     }catch(err){
//         res.status(500).json({error: err.message})
//     }
// }
// )
// app.get('/', async(req, res) => {
//     const notes = await Note.find()
//     res.json(notes)
// }
// )
// app.post('/delete-note', async (req, res) => {
//     const {id} =req.body
//     console.log(id);
//     // res.json(id)
//     try {
//         const note = await Note.deleteOne({id:id});
//         if (!note) {
//             return res.status(404).json({ error: 'Note not found' });
//         }
//         res.json(note);
//     } catch (error) {
//         // Handle errors that might occur during the deletion process
//         console.error('Error deleting note:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.post('/update-note', async(req, res) => {
//     const {_id,updateField,flage} = req.body
//     console.log(_id);
//     console.log(updateField);
//     console.log(flage);
//     // if(!updateField) {
//     //     return res.status(400).json({msg: 'Please enter all fields'})
//     // }
//     if(flage){
//          await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 title: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )
//     }
//     else{
//           await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 content: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )

//     }
    
//     res.json(_id)
// }
// )

//     // res.send('API is running....')
// //     await Note.insertOne({title:title,
// //         content:content
// //     })
// // })


 