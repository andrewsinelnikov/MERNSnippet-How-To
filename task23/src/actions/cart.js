import { 
    ADD_TO_CART,
    REMOVE_FROM_CART 
} from './types';
import axios from 'axios';

export const addToCart = (id, total) => async dispatch => {
    const res = await axios.get(`/api/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: { 
            product: res._id, 
            title: res.title, 
            info: res.info, 
            price: res.price, 
            company: res.company, 
            img: res.img, 
            count: res.count, 
            total 
        }
    });
}