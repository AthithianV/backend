import express from "express";  
import cors from "cors";

import connectToMongoDB from "./config/connectToDb";
import MovieRouter from "./features/movies/movies.routes";
import { ErrorHandler } from "./middlewares/errorHandler";


const server = express();

server.use(express.json());
server.use(cors());

const router = express.Router();

router.use("/movies", MovieRouter);

router.use((req, res, next) => {
  res.status(400).send("Page not Found");
});

// Error Handling
router.use(ErrorHandler);


server.use("/.netlify/functions/api", router);

const port = process.env.PORT || 10000;
server.listen(port, () => {
    console.log("Server Listening at "+port);
    connectToMongoDB();
});

export {server};