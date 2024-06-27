"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_controller_1 = require("./movies.controller");
const MovieRouter = express_1.default.Router();
MovieRouter.get("/", movies_controller_1.getAllMovies);
MovieRouter.post("/", movies_controller_1.addMovie);
MovieRouter.put("/:movieId", movies_controller_1.updateMovie);
MovieRouter.delete("/", movies_controller_1.deleteMovie);
MovieRouter.get("/rate/:movieId/:rating", movies_controller_1.rateMovie);
MovieRouter.get("/toggleWatch/:movieId/:seen", movies_controller_1.toggleWatch);
exports.default = MovieRouter;
