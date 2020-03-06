import axios from 'axios';

export const FETCHING_ARTICLES_START = 'FETCHING_ARTICLES_START';
export const FETCHING_ARTICLES_SUCCESS = 'FETCHING_ARTICLES_SUCCESS';
export const FETCHING_ARTICLES_FAILURE = 'FETCHING_ARTICLES_FAILURE';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getArticles = (period = 1) => dispatch => {
    dispatch({type: FETCHING_ARTICLES_START});
    const BASE_API_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`;
    
    axios.get(BASE_API_URL)
    .then(res => {
        dispatch({type: FETCHING_ARTICLES_SUCCESS, payload: res.data.results})
    }).catch(err => {
        console.log('ERROR', err);
        dispatch({
            type: FETCHING_ARTICLES_FAILURE,
            payload: `${err.message} with response code ${
                err.code
            }`
        });
    });
};