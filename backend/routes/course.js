const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req,res){

})
// gets all available courses on store
courseRouter.get("/preview", function(req,res){

})
module.exports={
    courseRouter: courseRouter
}