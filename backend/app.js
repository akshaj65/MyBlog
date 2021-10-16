const express= require("express");
const app= express();
const cookieParser=require('cookie-parser')
const errorMiddleware= require("./middleware/error")

app.use(express.json())
app.use(cookieParser());//we have used this for parsing cookies

//Route imports
const blogPost=require("./routes/blogPostRoute");
const user =require("./routes/userRoute");


app.use("/api/v1",blogPost);
app.use("/api/v1",user);

//middleware for errors
app.use(errorMiddleware)

module.exports=app;