import axios from 'axios';

const API = axios.create({
    baseURL: 'https://642fcea0b289b1dec4ba6a89.mockapi.io/product/',
});

export const getProducts = () => {
    return API.get('/products');
};