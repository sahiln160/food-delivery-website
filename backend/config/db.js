import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sahil20376:tVqZ7GhnGKJbfRiU@cluster0.fdhcw.mongodb.net/foofwebsite').then(()=>console.log("DB Connected"));
}