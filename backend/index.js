import express from 'express'
import connectDB from './src/db/dbconn.js'
import cors from 'cors'
import  Note  from './src/moduls/node.schema.js'

const app = express()

app.use(express.json())
// Connect to MongoDB
connectDB()
app.use(cors());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


//rout=======
app.post('/postnote', async(req, res) => {
    const {title, content} = req.body
    console.log(req.body)
    if (!title || !content){
        return res.status(400).json({msg: 'Please enter all fields'})
    }
    try{
        const newNote = new Note({
            title,
            content
        })
        const savedNote = await newNote.save()
        res.json(savedNote)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
)
app.get('/', async(req, res) => {
    const notes = await Note.find()
    res.json(notes)
}
)

    // res.send('API is running....')
//     await Note.insertOne({title:title,
//         content:content
//     })
// })

const PORT=3300;
app.listen(PORT, () => {
    console.log(`Server running in  mode on port ${PORT}`)   
})
