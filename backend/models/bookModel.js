import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required:true
        },
        author: {
            type:String,
            required:true
        },
        publishYear: {
            type:String,
            required:true
        }
    },
    { collection: 'Books' },
    {
        timestamps: true
    }
)

export const Book = mongoose.model('Books', bookSchema)