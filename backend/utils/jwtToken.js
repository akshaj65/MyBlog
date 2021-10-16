
//creating token and saving it in the cookie
const sendToken =(user,statuscode,res)=>{
    let token=user.getJWTToken();
    //options for cookie
    const options={
        expires: new Date(
            Date.now()+ process.env.COOKIE_EXPIRE *24*60*60*1000
        ),
        httponly:true,
    };
    res.status(statuscode).cookie('token',token,options).json({
        success:true,
        user,
        token,
        
    });
};

// sendToken();
module.exports=sendToken;