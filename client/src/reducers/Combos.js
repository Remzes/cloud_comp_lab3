
const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "FETCH_COMBOS_PENDING":
            return {...state, fetching: true};
            break;
        case "FETCH_COMBOS_REJECTED":
            return {...state, fetching: false, error: payload};
            break;

        case "FETCH_COMBOS_FULFILLED":
            return {...state, fetching: false, fetched: true, data: payload};
            break;
    }

    return state;
}