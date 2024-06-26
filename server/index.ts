import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import connectToMongoDB from "../src/config/connectToDb";
import MovieRouter from "../src/features/movies/movies.routes";
import { ErrorHandler } from "../src/middlewares/errorHandler";


const server = express();

server.use(express.json());
server.use(cors());

server.use("/movies", MovieRouter);

server.use((req, res, next) => {
  res.status(400).send("Page not Found");
});

// Error Handling
server.use(ErrorHandler);


const port = process.env.PORT || 10000;
server.listen(port, () => {
    console.log("Server Listening at "+port);
    connectToMongoDB();
});