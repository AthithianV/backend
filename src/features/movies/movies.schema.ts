import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    title: String,
    overview: String,
    release_date: String,
    poster: String,
    backdrop: String,
    rating: {type: Number, default: 0, max: 5, min: 0},
    seen: {type: Boolean, default: false},
});

const MovieModel = mongoose.model("movies", MovieSchema);
export default MovieModel;