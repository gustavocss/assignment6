const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://gustavocs:admin@cluster0.5gryi.mongodb.net/Character?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
