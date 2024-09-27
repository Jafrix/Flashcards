'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: "",
          answer: "",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "",
          answer: "",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};