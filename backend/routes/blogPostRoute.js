const express = require("express");
const { getAllBlogPosts, createBlogPost, updateBlogPost, deleteBLogPost, getBlogPost } = require("../controllers/blogPostController");
const { isAuthenticatedUser, authorizeUser } = require("../middleware/auth");

const router = express.Router();


router.route("/posts")
    .get(getAllBlogPosts);
    // isAuthenticatedUser, authorizeUser, 
router.route("/post/new")
    .post(createBlogPost);
router.route("/post/:id")
    .delete(deleteBLogPost)
    .get(getBlogPost);
router.route('/update/:id')
    .post(updateBlogPost)


module.exports = router;