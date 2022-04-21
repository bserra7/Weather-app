import { DELETE_CITY, FILTER_CITY, SEARCH_CITY, SET_ERROR } from "../actions";

const initialState = {
    cities: [],
    error: false,
    city: []
};

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case SEARCH_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload],
                error: false
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_CITY:
            return {
                ...state,
                city: state.cities?.find(city => city.id === parseInt(action.payload))
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities?.filter(city => city.id !== action.payload),
                city: []
            }
        default:
            return {
                ...state
            }
    }
}