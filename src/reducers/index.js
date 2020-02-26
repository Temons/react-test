const initialState = {
    clubs: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLUBS_LOADED':
            return {
                clubs: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;