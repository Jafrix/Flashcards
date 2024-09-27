const { Theme } = require("../db/models");

class ThemeService {
  static async getThemes() {
    try {
      // console.log(await Post.findAll(), '---------')
      return await Theme.findAll();
    } catch (error) {
      return error;
    }
  }

  static async createTheme(data) {
    try {
      return await Theme.create(data);
    } catch (error) {
      return error;
    }
  }

  static async updateTheme(id, data) {
    try {
      const theme = await Theme.findOne({ where: { id } });
      if (!theme) {
        return { message: "Theme not found" };
      }
      return await theme.update(data);
    } catch (error) {
      return error;
    }
  }

  static async deletePost(id) {
    try {
      const theme = await Theme.findOne({ where: { id } });
      if (!theme) {
        return { isDeleted: false, message: "Post not found" };
      }
      await theme.destroy();
      return { isDeleted: true, message: "Success" };
    } catch (error) {
      return error;
    }
  }
}

module.exports = ThemeService;
