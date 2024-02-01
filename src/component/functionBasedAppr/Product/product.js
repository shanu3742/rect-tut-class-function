import { useDispatch, useSelector } from "react-redux";
import React from "react";
import './product.css'
import { getProduct } from "../../../redux/action/async_action/fetechProduct.action";

const  Product = () => {
    const state = useSelector((state) => state?.products);
    const dispatch = useDispatch();
    console.log(state);
    React.useEffect(() => {
        dispatch(getProduct())   
    },[dispatch])
    return (
        <div>
            <h6>product page </h6>
            <div className="product-container">
                {
                    state?.map((el,i) => {
                           return <div className="card">
                            <img  src={el?.image}  alt='product'  width={200} height={200} />
                            <footer>
                                <h3>{el?.category}</h3>
                                <button>Go To Product</button>
                            </footer>

                           </div>
                    })
                }
            </div>
        </div>
    )
}

export default Product;