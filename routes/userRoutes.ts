const express = require("express");
const userRoute = express.Router();
const usersController = require("../controllers/userController");

userRoute.get("/user", usersController.getUsers);

module.exports = userRoute;
