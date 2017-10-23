import axios from 'axios';

export const getProvinces = () => dispatch => {
    const request = axios.get('/api/provinces');
    dispatch({type: "FETCH_PROVINCES", payload: request});
};

export const getCombos = () => dispatch => {
    const request = axios.get('/api/combos');
    dispatch({type: "FETCH_COMBOS", payload: request});
};

export const getMeals = () => dispatch => {
    const request = axios.get('/api/meals');
    dispatch({type: "FETCH_MEALS", payload: request})
};