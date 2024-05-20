import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import "../css/ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();


    const plusButton = () => {
        setCount(count + 1)
    }
    const minusButton = () => {

        if (count == 0){
            setCount(0)
        }
        else {
             setCount(count -1 )
        }
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = () => {
        products &&
            products.map((product) => {
                if (product.id == id) {
                    dispatch(setSelectedProduct(product));
                }
            });
    };

    return (
        <div className="details-card">
            <div>
                <img className="img" src={image} width={500} alt="" />
            </div>""
            <div>
                <h2>{title}</h2>
                <p className="description-text">{description}</p>
                <h1>{price}€</h1>
            
            <div style={{display:"flex",alignItems:"center"}}>
                <CiCirclePlus onClick={plusButton} style={{fontSize:"35px",cursor:"pointer"}}/>
                <span style={{fontSize:"35px",marginRight:"30px",marginLeft:"30px"}}>{count}</span>
                <CiCircleMinus onClick={minusButton} style={{fontSize:"35px",cursor:"pointer"}}/>
            </div>
            <div>
                <button className="add-button">Sepete Ekle</button>
            </div>
            </div>
        </div>
    );
}

export default ProductDetails;
