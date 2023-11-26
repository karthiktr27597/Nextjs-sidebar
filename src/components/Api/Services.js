import axios from "axios";


const url = "http://localhost:3000"

export const getAllProductsApi = async () => {
    console.log('getproducts call')
    return await axios.get(`${url}/product`)
}