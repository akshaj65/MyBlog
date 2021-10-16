const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const BlogPost = require("../models/blogPostModel");


// isAuthenticatedUser saves the id from the token to req.user
// without this we should again call cookie for getting userid or role
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    // console.log(token)

    if (!token) {
        return next(new ErrorHandler("Please login to use this resource", 401));
    }

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodeData.id);
    next();
})


//authorizes blog post user(creator) and admin
exports.authorizeUser = catchAsyncErrors(async (req, res, next) => {

    let blogPost = await BlogPost.findById(req.params.id).select("+createdBy");
    // console.log(blogPost)
    if (!blogPost) {
        return next(new ErrorHandler(" Post not found", 404));
    }
    // let userid= Object.values(blogPost)[3]["user"].valueOf();

    // const { token } = req.cookies;
    // const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    const isUserMatched = await blogPost.compareUserId(req.user.id);
     // console.log(isUserMatched)

    //checks for admin
    const isRoleAdmin=(req.user.role==='admin');
   // console.log(isRoleAdmin)
    // console.log(JSON.stringify(user['role']))

    if(isRoleAdmin){
        blogPost["createdBy"]=req.user.id;
        // console.log(blogPost["createdBy"])
        await blogPost.save()
    }
    
    //checks for not admin and not user
    if (!isUserMatched && !isRoleAdmin)  {
        return next(new ErrorHandler("Not allowed to access this resource ", 403));
    }
    next();
})


exports.authorizeRole =  (...roles) => {
    return (req, res, next) => {
        // console.log(req.user.role)
        
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler("Not allowed to access this resource ", 403));
        }
        next()
    }
}