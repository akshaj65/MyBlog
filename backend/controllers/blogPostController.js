const BlogPost = require("../models/blogPostModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create blog post
exports.createBlogPost = catchAsyncErrors(async (req, res, next) => {
    // req.body.createdBy=req.user.id
    // console.log(req.user.id)
    const blogPost = await BlogPost.create(req.body);
    blogPost.save();

    res.status(201).json({
        success: true,
        message: 'blog created succesfully',
        blogPost
    })
});

//Get all blog posts 
exports.getAllBlogPosts = catchAsyncErrors(async (req, res) => {
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    const resultPerPage = 8;
    // const apiFeature = new ApiFeatures(BlogPost.find(), req.query)
    // .search()
    // .pagination(resultPerPage);
    // console.log(apiFeature)
    if (username)
        posts = await BlogPost.find({ username: username });
    else if (category)
        posts = await BlogPost.find({ category: category });
    else
        posts = await BlogPost.find({}).limit(resultPerPage); //limits number of posts in a page
    // const blogPosts = await apiFeature.query;
    // const blogPosts = await BlogPost.find();
    res.status(200).json({
        success: true,
        posts
    })
});

//get a blog post 

exports.getBlogPost = catchAsyncErrors(async (req, res, next) => {
    let blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
        return next(new ErrorHandler(" Post not found", 404));
    }

    res.status(200).json({
        success: true,
        blogPost
    })
});

//update post 

exports.updateBlogPost = catchAsyncErrors(async (req, res, next) => {
    let blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
        return next(new ErrorHandler(" Post not found", 404));
    }

    blogPost = await BlogPost.findByIdAndUpdate(req.params.id, { $set: req.body });

    res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        blogPost
    })
});

//delete post 

exports.deleteBLogPost = catchAsyncErrors(async (req, res, next) => {
    let blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
        return next(new ErrorHandler(" Post not found", 404));
    }

    await blogPost.remove();

    res.status(200).json({
        success: true,
        message: "Post Deleted Succesfully"
    })
});