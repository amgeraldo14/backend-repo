const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("../routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req: any, res: any) => {
  res.send("Hello World");
});

app.use(userRoute);

app.listen(port, () => {
  console.log(`backend app listening on port ${port}`);
});
