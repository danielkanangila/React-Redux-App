import { 
    FETCHING_ARTICLES_START,
    FETCHING_ARTICLES_SUCCESS,
    FETCHING_ARTICLES_FAILURE 
} from '../actions';

const initialState = {
    articles: [],
    isFetching: false,
    error: "",
    periods: [
        {name: "1 day", value: 1},
        {name: "7 days", value: 7},
        {name: "30 days", value: 30}
    ]
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
                articles: action.payload,
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