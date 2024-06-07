const express = require("express");

const postModel = require("../models/postModel");

const router = express.Router();

router.get("/posts", async (req, res) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit ||3);
  const skip = (page - 1) * limit;
  const posts = await postModel.find().skip(skip).limit(limit).exec();
  const totalPosts =await postModel.countDocuments();
  res.json({
    posts,
    totalPages: Math.ceil(totalPosts / limit),
    currentPage: page,
  });
});
router.post("/posts", async (req, res) => {
  // const {title,content,category}=req.body;
  const post = await postModel.create(req.body);
  res.json(post);
});
router.post("/posts/many", async (req, res) => {
  const dumyData=[
    {  title: 'Twelve Post', content: 'This is the content of the third post.', category: 'Science' },
    {title:"Thirteen Post",content:"This is the Thirteen posts.",category:"Travel"},
    {title:"Fourteen Post",content:"This is the Fourteen posts.",category:"Science"},
    {title:"Fiveteen Post",content:"This is the Fiveteen posts.",category:"Travel"}
]
  const post = await postModel.insertMany(dumyData);
  res.json(post);
});

module.exports = router;
