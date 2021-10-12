const router = require('express').Router();
const AuthController = require('../controllers/auth_controller.js');
const auth = require("../authMiddleware/auth");



// Private Route, logged In User Can Access it.
router.get("/", auth, AuthController.getUser);

router.post("/", AuthController.loggedUser);

module.exports = router;