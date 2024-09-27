'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
   
    static associate({Theme}) {
      {
        this.belongsTo(Theme, { foreignKey: "themeId" });
      }
    }
  }
  Question.init({
    question: DataTypes.TEXT,
    answer: DataTypes.STRING,
    themeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};