const express = require("express");
const router = express.Router();
const controller = require("../Controller/NoteController")

router.get('/', controller.get)
router.post('/post', controller.post)

module.exports = router;