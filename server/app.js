require("dotenv").config();
const express = require("express");

const app = express();
const indexRouter = require("./routes/index.routes");
const serverConfig = require("./config/serverConfig");

serverConfig(app);
app.use("/api", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(` ! Флэшкардс работает на ${process.env.PORT}  порту ! `);
});
