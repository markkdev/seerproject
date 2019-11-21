const initialState = {
    name: ''
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SUBMIT_FORM':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default rootReducer;
