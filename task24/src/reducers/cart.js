import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
    items: [],
};

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            const existItem = state.items.find(item => item.product === payload.product);

            if (existItem) return {
                ...state,
                items: state.items.map(item => item.product === existItem.product ? payload : item)
            }

            return {
            ...state,
            items: [ ...state.items, payload],
        };
        default:
            return state;
    }
}