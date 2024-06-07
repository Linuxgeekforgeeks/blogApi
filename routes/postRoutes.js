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
    { "title": "First Post", "content": "This is the content of the first post.", "category": "Technology" },
    { "title": "Second Post", "content": "This is the content of the second post.", "category": "Travel" },
    { "title": "Third Post", "content": "This is the content of the third post.", "category": "Science" },
    { "title": "Fourth Post", "content": "This is the content of the fourth post.", "category": "Travel" },
    { "title": "Fifth Post", "content": "This is the content of the fifth post.", "category": "Science" },
    { "title": "Sixth Post", "content": "This is the content of the sixth post.", "category": "Travel" },
    { "title": "Seventh Post", "content": "This is the content of the seventh post.", "category": "Technology" },
    { "title": "Eighth Post", "content": "This is the content of the eighth post.", "category": "Science" },
    { "title": "Ninth Post", "content": "This is the content of the ninth post.", "category": "Travel" },
    { "title": "Tenth Post", "content": "This is the content of the tenth post.", "category": "Technology" }
]
  const post = await postModel.insertMany(dumyData);
  res.json(post);
});

module.exports = router;
