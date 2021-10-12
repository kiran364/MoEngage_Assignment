const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const animeRoute = require('./routes/anime.route');


// App Config...
const app = express();                 
dotenv.config();                       
const Port = process.env.Port;

// Middleware
app.use(express.json());
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/anime", animeRoute);


// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));

//Default Route
app.get("/", (req, res) => {
    res.send("Hello From Anime Review Server");
});


//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port -- ${Port}`);
})