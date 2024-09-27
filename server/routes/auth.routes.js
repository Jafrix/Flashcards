const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const UserService = require("../services/User.service");

authRouter.post("/reg", async (req, res) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      res.status(400).json({
        message: "Очень нужен твой пароль !",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await UserService.createUser({
        name,
        password: hashPassword,
      });
      // const user = await User.create({ email, password: hashPassword });
      const tmpUser = user.get();
      delete tmpUser.password;
      res.status(201).json({ user: tmpUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
authRouter.post("/log", async (req, res) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      res.status(400).json({
        message: "Введите логин или пароль ",
      });
    } else {
      const user = await UserService.getUserByEmail(name);
      //   const user = await User.findOne({ where: { email } });
      //   console.log(user, "user");
      console.log(password, "password");

      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const tmpUser = user.get();
        delete tmpUser.password;
        res.status(200).json({ user: tmpUser });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
authRouter.post("/logout", async (req, res) => {});

module.exports = authRouter;
