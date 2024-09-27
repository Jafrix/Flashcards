const indexRouter = require("express").Router();

const questionRouter = require("./question.routes");
const authRouter = require("./auth.routes");
const themeRouter = require("./theme.routes")

indexRouter.use("/question", questionRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/theme", themeRouter);

module.exports = indexRouter;
