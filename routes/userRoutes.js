const User = require("../models/userModel");
const express = require("express");

const router = express.Router();

router.get("/users",async(req,res)=>{
    const users=await User.find()
    res.json(users);
})

router.post("/register", async (req, res) => {
  const { username, email,password } = req.body;
  await User.create({ username, password,email });
  res.json({ message: "User registered Successfully..." });
})
router.post("/login",async(req,res)=>{
    const { username, email,password } = req.body;
    const existingUser=User.findOne({$or:[username,email]})
    if(!existingUser){
        res.json({message:"User does not Exists."})
    }
    res.json({message:"user login successfully."})

});

module.exports = router;
