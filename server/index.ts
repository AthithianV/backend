import axios from "axios";
import { error } from "console";
import express, { Request, Response } from "express";

const server = express();

const TMDB_API_KEY = 'd60f042c4697494d7e99bd7e09fb4a28';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w780';

server.get("/get", async (req:Request, res:Response)=>{
    try{

        const response = await axios.get(`${TMDB_BASE_URL}/movie/now_playing`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: 1
      }
    });

    const movies = response.data.results.map((movie: any) => ({
      ...movie,
      poster_url: `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop_url: `${TMDB_BACKDROP_BASE_URL}${movie.backdrop_path}`
    }));
    
    res.json(movies);
    }catch(err){
        error(err);
    }
})


const port = 3000;
server.listen(port, () => {
    console.log("Server Listening at "+port);
})