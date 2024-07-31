require("../server/database/database");
const express = require("express");
const authRouter = require("./routes/routes");
const app = express();

PORT = 3040;

app.use(express.json());

app.use("/routes", authRouter);

app.listen(PORT, (req, res) => {
  console.log("Server Connected");
});
