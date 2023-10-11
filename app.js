// app.js
const express = require("express");
const app = express();
const port = 3000;

const apiUserRouter = require("./api_user");
const apiIdsRouter = require("./api_id");

app.use("/user", apiUserRouter);
app.use("/ids", apiIdsRouter);

app.listen(port, () => {
  console.log("API is running on port", port);
});
