const express = require("express");
const userRoute = express.Router();
const usersController = require("../controllers/userController");
const authMiddleware = require("../middleware/authmiddleware");

userRoute.get("/user", usersController.getUsers);
userRoute.get("/user/:id", authMiddleware, usersController.getUserById);
userRoute.patch("/user/:id", authMiddleware, usersController.updateUser);
module.exports = userRoute;
