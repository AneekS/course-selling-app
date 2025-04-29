const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signin", function(req,res){
    
})
userRouter.post("/signup", function(req,res){

})
//displays the purchased courses of user
userRouter.get("/purchases", function(req,res){

})
module.exports={
    userRouter: userRouter
}