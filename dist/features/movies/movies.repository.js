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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleWatchRepo = exports.rateMovieRepo = exports.deleteMovieRepo = exports.updateMovieRepo = exports.addMovieRepo = exports.getAllMoviesRepo = void 0;
const movies_schema_1 = __importDefault(require("./movies.schema"));
const getAllMoviesRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movies_schema_1.default.find();
        return movies;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllMoviesRepo = getAllMoviesRepo;
const addMovieRepo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMovie = new movies_schema_1.default(data);
        yield newMovie.save();
    }
    catch (error) {
        throw error;
    }
});
exports.addMovieRepo = addMovieRepo;
const updateMovieRepo = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movies_schema_1.default.findByIdAndUpdate(id, Object.assign({}, data), { upsert: true, new: true });
    }
    catch (error) {
        throw error;
    }
});
exports.updateMovieRepo = updateMovieRepo;
const deleteMovieRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movies_schema_1.default.findOneAndDelete({ _id: id });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteMovieRepo = deleteMovieRepo;
const rateMovieRepo = (id, rating) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movies_schema_1.default.findByIdAndUpdate(id, { rating });
    }
    catch (error) {
        throw error;
    }
});
exports.rateMovieRepo = rateMovieRepo;
const toggleWatchRepo = (id, seen) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield movies_schema_1.default.findByIdAndUpdate(id, { seen });
        console.log(updated);
    }
    catch (error) {
        throw error;
    }
});
exports.toggleWatchRepo = toggleWatchRepo;
