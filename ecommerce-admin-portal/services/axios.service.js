import axios from 'axios';

export const getProducts = async() =>{

    const response = await axios('/api/products')
    return response;

}