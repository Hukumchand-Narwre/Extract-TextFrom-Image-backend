const express = require("express");
const controller = require("../controllers/keyPhraseController");

const Route = express.Router();

Route.route("/").get(controller.keyPhrase);

module.exports = Route;
