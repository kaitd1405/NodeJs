const express = require("express");
const userController = require("../controllers/userCotroller");
const auth = require("../midderwares/authMidderware");

const userRouter = express.Router();

userRouter
    .route("/")
    .get(auth.authorization,userController.getAllUsers)
    .post(userController.createUser);

userRouter 
    .route("/getUsersAge")
    .get(auth.authorization,userController.getAllUsers);

userRouter
    .route("/getUsersName")
    .get(auth.authorization,userController.getAllUsers);

userRouter
    .route("/:id")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(auth.authorization,userController.deleteUser);

    module.exports = userRouter;