const express = require("express");
const registerUser = require("../controllers/registerUser");

const router = express.Router();

//create user api
router.post("/register", registerUser);

module.exports = router;
