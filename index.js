const express=require("express");
const mongoose=require("mongoose");
const postRouter= require("./routes/postRoutes");
require("dotenv").config()
const cors=require("cors")


const app=express()
const port=process.env.PORT||5000
//MiddleWare
app.use(express.json())
app.use(cors({origin:"*"}))

//MongoDb Connection
try {
    mongoose.connect(process.env.MONGOURL,{dbName:"youtubeBlog"})
    console.log("Connected to Mongodb SucessFully...")
} catch (error) {
    if(error) throw("Mongodb Error"+error)
}

app.use("/api/",postRouter)

app.listen(port,()=>{
    console.log("Our server is running on the "+port)
})