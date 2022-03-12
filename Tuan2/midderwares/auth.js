const User = require("../models/userModel");
const userRouter = require("../routes/userRouter");
const catchAsync = require("../utils/catchAsync");

exports.authorization = catchAsync(async (req,res,next) => {
    const {id} = req.query;
    const user = await User.findById(id);
    if (!user){
        res.status(404).json({
            message: "User not exist",
        });
    }
    if (user.role !== 'admin') {
        res.status(401).json({
            message: "user not right",
        });
    }
});