"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema = new mongoose_1.default.Schema({
    title: String,
    overview: String,
    release_date: String,
    poster: String,
    backdrop: String,
    rating: { type: Number, default: 0, max: 5, min: 0 },
    seen: { type: Boolean, default: false },
});
const MovieModel = mongoose_1.default.model("movies", MovieSchema);
exports.default = MovieModel;
