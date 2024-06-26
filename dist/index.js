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
const axios_1 = __importDefault(require("axios"));
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const TMDB_API_KEY = 'd60f042c4697494d7e99bd7e09fb4a28';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w780';
server.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${TMDB_BASE_URL}/movie/now_playing`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                page: 1
            }
        });
        const movies = response.data.results.map((movie) => (Object.assign(Object.assign({}, movie), { poster_url: `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`, backdrop_url: `${TMDB_BACKDROP_BASE_URL}${movie.backdrop_path}` })));
        res.json(movies);
    }
    catch (err) {
        (0, console_1.error)(err);
    }
}));
const port = 3000;
server.listen(port, () => {
    console.log("Server Listening at " + port);
});
