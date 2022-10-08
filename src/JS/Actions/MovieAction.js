import {
    ADD_MOVIE,
    DELETE_MOVIE,
    FILTER_MOVIE,
} from "../ActionsTypes/MovieActionsType";

export const addMovie = (Movie) => {
    return {
        type: ADD_MOVIE,
        payload: Movie,
    };
};

export const removeMovie = (id) => {
    return {
        type: DELETE_MOVIE,
        payload: id,
    };

};
export const filterMovie = (title)=>{
    return{
        type:FILTER_MOVIE,
        payload:title   
    }
}