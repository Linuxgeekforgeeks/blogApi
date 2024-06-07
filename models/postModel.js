const mongoose =require("mongoose");

const PostSchema=new mongoose.Schema({
    title:String,
    content:String,
    category:String,
},{timestamps:true})

 const postModel=mongoose.model("Posts",PostSchema)

 module.exports=postModel