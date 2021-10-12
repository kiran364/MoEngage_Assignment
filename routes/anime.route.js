const router = require('express').Router();
const AnimeController = require('../controllers/anime_controller')
const auth = require("../authMiddleware/auth");

//Create Anime 
router.post('/', AnimeController.create_anime);

//Get Anime 
router.get("/", auth, AnimeController.get_anime);


module.exports = router;