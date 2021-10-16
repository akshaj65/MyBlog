const express = require("express");
const { getAllBlogPosts, createBlogPost, updateBlogPost, deleteBLogPost, getBlogPost } = require("../controllers/blogPostController");
const { isAuthenticatedUser, authorizeUser } = require("../middleware/auth");

const router = express.Router();


router.route("/posts")
    .get(getAllBlogPosts);

router.route("/post/new")
    .post(isAuthenticatedUser, createBlogPost);
router.route("/post/:id")
    .put(isAuthenticatedUser, authorizeUser , updateBlogPost)
    .delete(isAuthenticatedUser, authorizeUser, deleteBLogPost)
    .get(getBlogPost);


module.exports = router;