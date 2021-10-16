const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // mongodb id error  (cast error)
    if (err.name === "CastError"){
        const message=`Resource not found, Invalid ${err.path}`;
        err= new ErrorHandler(message,400);
    }

    //mongoose duplicate key error
    if(err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} Entered`;
        err= new ErrorHandler(message,400);
    }

    //wrong JWT error
    if (err.name === "JsonWebTokenError"){
        const message=`Json Web Token Invalid ,try again`;
        err= new ErrorHandler(message,400);
    }

    //JWT Expire Error
    if (err.name === "JsonExpiredError"){
        const message=`Json Web Token is Expired ,try again`;
        err= new ErrorHandler(message,400);
    }

        res.status(err.statusCode).json({
            success: false,
            message: err.message
            ,error:err.stack 

        })
}