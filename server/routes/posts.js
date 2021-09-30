const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  likePost,
} = require("../controllers/posts");


const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id/likePost", likePost);

module.exports = router;
