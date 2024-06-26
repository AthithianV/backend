import { NextFunction, Request, Response } from "express";
import { addMovieRepo, deleteMovieRepo, getAllMoviesRepo, rateMovieRepo, toggleWatchRepo, updateMovieRepo } from "./movies.repository";


export const getAllMovies = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const movies = await getAllMoviesRepo();
        res.status(201).json({success: true, msg:"All Movies are fetched", movies});
    }catch(error){
        next(error);
    }
}

export const addMovie = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const movie = req.body;
        await addMovieRepo(movie);
        res.status(201).json({success: true, msg:"New Movie is added"});
    } catch (error) {
        next(error);
    }
}

export const updateMovie = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const movie = req.body;
        await updateMovieRepo(movie);
        res.status(201).json({success: true, msg:"Movie is updated"});
    } catch (error) {
        next(error);
    }    
}

export const deleteMovie = async (req:Request, res:Response, next:NextFunction)=>{
    try {
       const movieId = req.params.id;
       await deleteMovieRepo(movieId);
       res.status(204).json({success: true, msg:"New Movie is added"});
    } catch (error) {
        next(error);
    }
}

export const rateMovie = async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const movieId:string = req.query.movieId?.toString() || "";
        const rating = Number(req.query.rating || 0);
        await rateMovieRepo(movieId, rating);
        res.status(201).json({success: true, msg:"Rating for Movie is added"});
    } catch (error) {
        next(error);
    }    
}

export const toggleWatch = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const movieId:string = req.params.id;
        let seen:boolean = false;
        if(req.params.seen === '1') seen = true;
        await toggleWatchRepo(movieId, seen);
        res.status(201).json({success: true, msg: seen?"Movie marked as watched":"Movie marked unwatch"});
    } catch (error) {
        next(error);
    }
}