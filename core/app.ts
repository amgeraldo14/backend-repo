//@ts-ignore
const express = require("express");
//@ts-ignore
const app = express();
//@ts-ignore
const userRoute = require("../routes/userRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req: any, res: any) => {
  res.send("Hello World");
});

app.use(userRoute);

module.exports = app;
