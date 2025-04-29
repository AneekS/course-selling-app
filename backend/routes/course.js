const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/course/purchase", function(req,res){

})
// gets all available courses on store
courseRouter.get("/course/preview", function(req,res){

})
module.exports={
    courseRouter: courseRouter
}