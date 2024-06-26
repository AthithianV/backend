import express from "express";
import { addMovie, deleteMovie, getAllMovies, rateMovie, toggleWatch, updateMovie } from "./movies.controller";

const MovieRouter = express.Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.post("/", addMovie);
MovieRouter.put("/", updateMovie);
MovieRouter.delete("/", deleteMovie);
MovieRouter.get("/rate/:movieId/:rating", rateMovie);
MovieRouter.get("/toggleWatch/:movieId/:seen", toggleWatch);

export default MovieRouter;