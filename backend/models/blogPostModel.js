const mongoose= require("mongoose");

const blogPostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title" ],
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
    },
    category:{
        type:String,
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    username:{
        type:String,
        required:true,
    }
    // createdBy:{
    //     type:mongoose.Schema.ObjectId,
    //     // ref:"user", //ref tells mongoose which model to use during population

    //     required:true,
    //     select:false,
    // }
}) 
//compare user is
blogPostSchema.methods.compareUserId= async function(data){
     return  (await JSON.stringify(this["createdBy"]).replace(/"/g,"")===data)
     
    
}

module.exports=mongoose.model("blogPost",blogPostSchema);