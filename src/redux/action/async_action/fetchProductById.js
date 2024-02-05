import axios from "axios"
const fetchProductById = (id) => {
    console.log(id)

    return async (dispatch,getState) => {


        const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: "FETCH_PRODUCT_BY_ID_REQUEST",
            payload:result.data,
        })
    }
}
export default fetchProductById;