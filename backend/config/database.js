const mongoose=require("mongoose");



const connectDatabase=()=>{

    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((data)=>{
            console.log(`MongoDB connected with server :${data.connection.host}`)
        })
        
//as we have created unhandled Promise Rejection in the server.js we dont need 
// this catch block as if we do this this will only take are and will not become unhandled
//         .catch((err)=>{
//             console.log(err);
//         })
}


module.exports=connectDatabase;