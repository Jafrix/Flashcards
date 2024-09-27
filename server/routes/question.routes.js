const questionRouter = require("express").Router();
const { Question } = require("../db/models");
const QuestionService = require("../services/Question.service");

questionRouter.get("/", async (req, res) => {
  try {
    // const categories = await PostCategory.findAll();
    const questions = await QuestionService.getQuestions();
    res.status(200).json({ questions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
questionRouter.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    if (!title) {
      res.status(400).json({
        error: "Нам очень нужен твой title!!! Ну пожалуйста! ",
      });
    } else {
      //const post = await PostCategory.create({ title });
      const question = await QuestionService.createQuestion({ question });
      res.status(201).json({ question });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

questionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // const countDeletedPosts = await PostCategory.destroy({ where: { id } });
    const {isDeleted} = await QuestionService.deleteQuestion(id);

    if (isDeleted) {
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(400).json({ message: "Not found record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

questionRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    // const postArrUpdate = await PostCategory.update(
    //   { title },
    //   { where: { id } }
    // );
    // const postArrUpdate = await CategoryService.updateCategory(id, { title });
    // if (postArrUpdate.length > 0) {
    //   const post = await PostCategory.findOne({ where: { id } });
    //   res.status(200).json({ post });
    // }
    const question = await QuestionService.updateQuestion(id, { question });
    if (question) {
      res.status(200).json({ question });
    } else {
      res.status(400).json({ message: "Not update" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = questionRouter;
