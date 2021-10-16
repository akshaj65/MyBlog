const BlogPost = require("../models/blogPostModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create blog post
exports.createBlogPost = catchAsyncErrors(async (req, res, next) => {
    req.body.createdBy=req.user.id
    // console.log(req.user.id)
    const blogPost = await BlogPost.create(req.body);

    res.status(201).json({
        success: true,
        blogPost
    })
});

//Get all blog posts 
exports.getAllBlogPosts = catchAsyncErrors(async (req, res) => {
    const resultPerPage =5;
    const apiFeature = new ApiFeatures(BlogPost.find(), req.query)
        .filter()
        .pagination(resultPerPage);
    // console.log(apiFeature)
    
    const blogPosts = await apiFeature.query;
    // const blogPosts = await BlogPost.find();
    res.status(200).json({
        success: true,
        blogPosts
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

    blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
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