const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieTitle: String,
  movieDirector: String,
  movieGenre: String,
});
const Movies = mongoose.model("Movies", movieSchema);
module.exports = { Movies };
