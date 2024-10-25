/*
->We are creating a function that should return an async function
*/ 

const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try{
            await fn(req,res,next);
        }
        catch(error){
            next(error);
        }
    }
}

module.exports=asyncWrapper;