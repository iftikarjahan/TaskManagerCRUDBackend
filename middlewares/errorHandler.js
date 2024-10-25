const errorHandlingMiddleware=(err,req,res,next)=>{
    res.status(500).json({msg:"Something went wrong. Please try again later🤔🤔🤔"});
}

module.exports=errorHandlingMiddleware;