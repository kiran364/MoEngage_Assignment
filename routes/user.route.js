const router = require("express").Router();
const UserController = require("../controllers/user_controller");


router.post("/", UserController.registarUser); 

module.exports = router;