import {
    ADD_MOVIE,
    DELETE_MOVIE,
    FILTER_MOVIE,
} from "../ActionsTypes/MovieActionsType";
import {Data} from "../../Data"
const initialState = {Data};

var filteredData = {Data}
    
    // contacts: [
    //     {
    //         id: 1,
    //         name: "Jhon Doe",
    //         email: "jhonDoe@gmail.com",
    //         phone: "123-456-7890",
    //     },
    //     {
    //         id: 2,
    //         name: "Karen Williams",
    //         email: "karen@gmail.com",
    //         phone: "123-456-7890",
    //     },
    // ],

//Pure fucntion
// payload is the data that we want to pass to the reducer (we will pass the data from the component to the reducer)
export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                Data: [...state.Data, action.payload],
            };
        case DELETE_MOVIE:
            return {
                ...state,
                Data: state.Data.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        case FILTER_MOVIE:
            console.log(action.payload)
            if (action.payload.toLocaleLowerCase() == ''){
                return filteredData;
              
            }
            else {
                return {
                    ...state,
                     Data: state.Data.filter(
                         (movie) => movie.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) 
                        ),
                    };  
            }
            
        default:
            return filteredData;
    }
};
