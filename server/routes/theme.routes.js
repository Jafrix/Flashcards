const themeRouter = require("express").Router();
const { Theme } = require("../db/models");
const ThemeService = require("../services/Theme.service");


themeRouter.get("/", async (req, res) => {
  try {
    const themes = await ThemeService.getThemes();
    // console.log(posts)
    res.status(200).json({ themes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

themeRouter.post("/", async (req, res) => {
    const { title } = req.body;
    try {
        if(!title) {
            res.status(400).json({
                error: "Нам очень нужен твой title ! ",
              })
        }
      const theme = await ThemeService.createTheme();
      res.status(200).json({ theme });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = themeRouter;