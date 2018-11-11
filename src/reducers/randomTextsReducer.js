import {ADD_TO_FAVORITES, FETCH_RANDOM_TEXT_SUCCESS, REMOVE_FROM_FAVORITES} from "../constants/randomTextConstants";

const initialState = {
    data: [],
    loading: true
};

export default function randomTextsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            state.data.find(t => t.id === action.id).isFavorite = true;
            break;

        case REMOVE_FROM_FAVORITES:
            state.data.find(t => t.id === action.id).isFavorite = false;
            break;

        case FETCH_RANDOM_TEXT_SUCCESS:
            state = {...state, data: action.data, loading: false};
            break;

    }

    return {...state};
}