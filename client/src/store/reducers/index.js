import { 
    FETCHING_ARTICLES_START,
    FETCHING_ARTICLES_SUCCESS,
    FETCHING_ARTICLES_FAILURE 
} from '../actions';

const initialState = {
    articles: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_ARTICLES_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_ARTICLES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                articles: [...state.articles, action.payload],
                error: ""
            };
        case FETCHING_ARTICLES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}