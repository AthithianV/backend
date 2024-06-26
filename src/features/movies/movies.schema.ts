import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    title: String,
    overview: String,
    release_date: String,
    poster: String,
    backdrop: String,
    rating: Number,
    seen: Boolean,
});

const MovieModel = mongoose.model("movies", MovieSchema);
export default MovieModel;