const getProductReducer = (state = [], {type,payload}) => {
    switch(type){
        case "FETCH_PRODUCT_BY_ID_REQUEST": return payload;
        default: return state
    }

}
export default getProductReducer;