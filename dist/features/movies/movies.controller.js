"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleWatch = exports.rateMovie = exports.deleteMovie = exports.updateMovie = exports.addMovie = exports.getAllMovies = void 0;
const movies_repository_1 = require("./movies.repository");
const getAllMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield (0, movies_repository_1.getAllMoviesRepo)();
        res.status(201).json({ success: true, msg: "All Movies are fetched", movies });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllMovies = getAllMovies;
const addMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = req.body;
        yield (0, movies_repository_1.addMovieRepo)(movie);
        res.status(201).json({ success: true, msg: "New Movie is added" });
    }
    catch (error) {
        next(error);
    }
});
exports.addMovie = addMovie;
const updateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = req.body;
        const movieId = req.params.movieId;
        yield (0, movies_repository_1.updateMovieRepo)(movie, movieId);
        res.status(201).json({ success: true, msg: "Movie is updated" });
    }
    catch (error) {
        next(error);
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.id;
        yield (0, movies_repository_1.deleteMovieRepo)(movieId);
        res.status(204).json({ success: true, msg: "New Movie is added" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMovie = deleteMovie;
const rateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const movieId = ((_a = req.params.movieId) === null || _a === void 0 ? void 0 : _a.toString()) || "";
        const rating = Number(req.params.rating || 0);
        yield (0, movies_repository_1.rateMovieRepo)(movieId, rating);
        res.status(201).json({ success: true, msg: "Rating for Movie is added" });
    }
    catch (error) {
        next(error);
    }
});
exports.rateMovie = rateMovie;
const toggleWatch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        let seen = true;
        if (req.params.seen === '0')
            seen = false;
        yield (0, movies_repository_1.toggleWatchRepo)(movieId, seen);
        res.status(201).json({ success: true, msg: seen ? "Movie marked as watched" : "Movie marked unwatch" });
    }
    catch (error) {
        next(error);
    }
});
exports.toggleWatch = toggleWatch;
