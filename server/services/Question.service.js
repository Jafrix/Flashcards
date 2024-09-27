const { Question } = require("../db/models");

class QuestionService {
  static async getQuestions() {
    try {
      return await Question.findAll();
    } catch (error) {
      return error;
    }
  }

  static async getOneThemeQuestions(themeId) {
    try {
      return await Question.findAll({ where: { themeId } });
    } catch (error) {
      return error;
    }
  }

  static async getOneThemeOneQuestion(themeId, questionId) {
    try {
      return await Question.findOne({ where: { themeId, id:questionId } });
    } catch (error) {
      return error;
    }
  }

  static async createQuestion(data) {
    try {
      return await Question.create(data);
    } catch (error) {
      return error;
    }
  }

  static async updateQuestion(id, data) {
    try {
      const question = await Question.findOne({ where: { id } });
      if (!question) {
        return { message: "Category not found" };
      }
      return await question.update(data);
    } catch (error) {
      return error;
    }
  }

  static async deleteQuestion(id) {
    try {
      const question = await Question.findOne({ where: { id } });
      if (!question) {
        return { isDeleted: false, message: "Category not found" };
      }
      await question.destroy();
      return { isDeleted: true, message: "Success" };
    } catch (error) {
      return error;
    }
  }
}

module.exports = QuestionService;
