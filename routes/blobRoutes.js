const express = require("express");
const blobLinkController = require("../controllers/blobController");
const getText = require("../middleware/getText");
const Route = express.Router();

Route.route("/").post(getText, blobLinkController.blobLinkController);

module.exports = Route;
