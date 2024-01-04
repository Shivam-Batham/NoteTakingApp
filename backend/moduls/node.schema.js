import mongoose, {Schema} from "mongoose";

import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const noteSchema = new Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true,
            default: 0 
        },
        title: {
            type: String,
            unique: true,
            uppercase: true,
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



noteSchema.plugin(AutoIncrement, { inc_field: "id" });

const Note = mongoose.model("Note", noteSchema)
export default Note;