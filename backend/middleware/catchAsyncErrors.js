//we are using the same thefunc to get the same parameters
// we are going to wrap over async functions to resolve if error arises in  the async like giving try catch for each async function

module.exports= (theFunc) =>(req,res,next)=>{
    Promise.resolve(theFunc(req,res,next)).catch(next);
}