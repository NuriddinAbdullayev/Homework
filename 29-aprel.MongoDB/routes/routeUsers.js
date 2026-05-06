const express = require("express");
const router = express.Router();
const controllerUsers = require("../controllers/controllersUsers");

// router.post("/users", controllerUsers.createUser);  

router.post("/register", controllerUsers.registerUser);

router.get("/login", controllerUsers.loginUser);

module.exports = router;