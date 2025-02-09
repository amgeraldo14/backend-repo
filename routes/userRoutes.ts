const express = require("express");
const userRoute = express.Router();
const usersController = require("../controllers/userController");

userRoute.get("/user", usersController.getUsers);
userRoute.get("/user/:id", usersController.getUserById);
userRoute.patch("/user/:id", usersController.updateUser);
module.exports = userRoute;
