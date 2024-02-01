
const productReucer = (state = [], {type,payload}) =>{
    switch(type){
        case "GET_PRODUCT": return payload
        default: return state
    }

}

export default productReucer;