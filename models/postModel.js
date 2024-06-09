const mongoose =require("mongoose");

const PostSchema=new mongoose.Schema({
    title:String,
    content:String,
    category:String,
    author:{type:mongoose.Types.ObjectId,ref:"User"}
},{timestamps:true})

 const postModel=mongoose.model("Posts",PostSchema)

 module.exports=postModel