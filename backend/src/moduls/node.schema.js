import mongoose, {Schema} from "mongoose";

const noteSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            lowercase: true,
        },
        content: {
            type: String,
            required: true,
            lowecase: true,
        },
    },
    {
        timestamps: true
    }
)

const Note = mongoose.model("Note", noteSchema)
export default Note;