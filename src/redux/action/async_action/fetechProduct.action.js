const getProduct = () => {


return async (dispatch,getState) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // return data;
    console.log(data);
    dispatch({type:"GET_PRODUCT",payload:data})
}
}

export {getProduct}