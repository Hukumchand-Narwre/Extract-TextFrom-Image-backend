const express = require("express");
const blobLinkController = require("../controllers/blobController");

const Route = express.Router();

Route.route("/").post(blobLinkController.blobLinkController);

module.exports = Route;
