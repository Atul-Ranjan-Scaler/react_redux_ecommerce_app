import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/ProductCard";
import { getProduct } from "../api";


function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
    async function fetchProduct() {
        const data = await getProduct(id);
        const product = await data.json();
        setProduct(product);
    }

    useEffect(()=> {
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='single-product'>
            <div className='single-product__product'>
                <Card product={product}/>
            </div>
        </div>
    )
}

export default SingleProduct;
