"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          id: 1,
          question:
            "https://www.usajacket.com/blog/wp-content/uploads/2019/06/Pepsiman-Costume-810x455.jpg",
          answer: "Pepsiman",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          question:
            "https://sun1-24.userapi.com/impg/P2AwRADc785GbWFAPl8xPcponlBsX04CDcx0eA/Cg8J-XVN6aM.jpg?size=510x340&quality=96&crop=103,0,994,663&sign=33aaaaf070c94e8a6bac12bc8d5b7825&type=album",
          answer: "Kermit",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          question:
            "https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-tanos-16.jpg",
          answer: "Thanos",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          question:
            "https://img0.joyreactor.cc/pics/post/%D0%92%D0%B0%D0%B4%D0%B8%D0%BA-%D0%9A%D0%BE%D0%BC%D0%B8%D0%BA%D1%81%D1%8B-%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%B3%D0%B5%D1%80%D0%BE%D0%B8-%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%B3%D0%B5%D1%80%D0%BE%D0%B8-%D0%B2-%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8-4264884.jpeg",
          answer: "Auqaman",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          question:
            "https://cs9.pikabu.ru/post_img/2017/07/12/2/149982396918685312.png",
          answer: "Neo",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          question:
            "https://cs12.pikabu.ru/post_img/big/2020/05/01/6/1588321083133991205.jpg",
          answer: "Сулейман Америка",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          question: "Какой самый часто используемый метод ?",
          answer: "Map",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          question: "Какой сегодня день ?",
          answer: "Юрьев",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          question: "Сколько лет Эльбурусу ?",
          answer: "6",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          question: "Что делать, если не знаешь что делать ?",
          answer: "гуглить",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          question: "true === 'false' ?",
          answer: "да",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
