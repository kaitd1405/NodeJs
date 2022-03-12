const express = require("express");
const mongoose= require("mongoose");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

const app = express ();
const port = 3000;
mongoose.connect("mongodb//localhost/studies")
    .then(() => {
        console.log("Connected success");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);

app.listen(port,() => {
    console.log('Example app listening on port $(port)');
});
        