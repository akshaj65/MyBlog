const mongoose= require("mongoose");

const blogPostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title" ]
    },
    category:{
        type:String,
        required:[true,"Please enter the topic" ],
        maxLength:[35,"Topic cannot exceed 35 characters"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        // ref:"user", //ref tells mongoose which model to use during population

        required:true,
        select:false,
    }
}) 
//compare user is
blogPostSchema.methods.compareUserId= async function(data){
     return  (await JSON.stringify(this["createdBy"]).replace(/"/g,"")===data)
     
    
}

module.exports=mongoose.model("blogPost",blogPostSchema);