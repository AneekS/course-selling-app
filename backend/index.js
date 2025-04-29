const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course")
const {adminRouter}= require("./routes/admin")

const mongoose = require("mongoose");
const express = require("express")
const app = express();
 
app.use(express.json());
//structured routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main() {
    await mongoose.connect("mongodb+srv://aneeksaha2020:6uuDsvh4two8QPa0@cluster0.gmqv4.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()

