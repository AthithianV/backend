import movie from "./movieType";
import MovieModel from "./movies.schema";


export const getAllMoviesRepo = async () => {
    try {
        const movies = await MovieModel.find();
        return movies;
    } catch (error) {
        throw error;
    }
}

export const addMovieRepo = async (data:movie) => {
    try {
        const newMovie = new MovieModel(data);
        await newMovie.save();
    } catch (error) {
        throw error;
    }
}

export const updateMovieRepo = async (data:movie) =>{
    try {
        await MovieModel.findOneAndUpdate({_id: data._id}, {...data}, {upsert: true, new: true});
    } catch (error) {
        throw error;
    }    
}

export const deleteMovieRepo = async (id:string)=>{
    try {
        await MovieModel.findOneAndDelete({_id: id});
    } catch (error) {
        throw error;
    }
}

export const rateMovieRepo = async (id:string, rating:number)=>{
    try {
        await MovieModel.findByIdAndUpdate(id, {rating}, {new: true});
    } catch (error) {
        throw error;
    }    
}

export const toggleWatchRepo = async (id:string, seen:boolean) =>{
    try {
        await MovieModel.findByIdAndUpdate(id, {seen}, {new: true});
    } catch (error) {
        throw error;
    }
}