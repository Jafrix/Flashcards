require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const path = require("path");

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
};

module.exports = serverConfig;