
const Anime = require('../models/animeModel');
const jwt = require("jsonwebtoken");


// Create Anime controller
exports.create_anime = async (req, res) => {
    try {
        const {anime_name, trailer_url, genres, description, rating, session_year, No_of_episode} = req.body;
        const newAnime = new Anime({
            anime_name,
            trailer_url, 
            genres,
            description,
            rating,
            session_year,
            No_of_episode
        });
        const saveAnime = await newAnime.save();
        res.status(200).json(saveAnime)

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

// Get Anime controller
exports.get_anime = async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decodetoken = jwt.verify(token, process.env.SecretKey);
        if(decodetoken){
           const animes = await Anime.find();
           res.status(200).json(animes);
        } else {
            res.status(404).json('Un_Authorize user');
        }
    } catch (err) {
        res.status(404).json(err);
    }
}


