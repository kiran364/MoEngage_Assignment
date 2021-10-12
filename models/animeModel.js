const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    anime_name: {
        type: String,
        require: true,
    },
    trailer_url: {
        type: String,
    },
    genres: {
        type: String,
    },
    description:{
        type: String
    },
    rating:{
        type: Number
    },
    session_year:{
        type: String
    },
    No_of_episode:{
        type: Number
    }
},
   {timestamps: true});

module.exports = mongoose.model('Anime', animeSchema);