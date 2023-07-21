import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AddButton from './AddButton';

function Card({ product }){

    const dispatch = useDispatch();
    const addItem = (()=>{
        dispatch({ type: 'ADD_ITEM', 
            payload: {
                product: product
            }});
    })

    return(
        <div className='product_landing__product-card'>
            <Link className='product_landing__single-product' to={`/product/${product? product.id : 1 }`}>
                <div className='product_landing__card-image'>
                    <img className='product_landing__card-img' src={product? product.image : null} alt='product_image' />
                </div>
            </Link>
            <div className='product_landing__product-title'>
                <h3 className='product_landing__title'>{product? product.title: null}</h3>
            </div>
            <div className='product_landing__price-cart'>
                <div className='product_landing__product-price'>
                    <h4 className='product_landing__price'>$ {product? product.price : null}</h4>
                </div>
                <div className='product_landing__button'>
                    <AddButton product={product} addItem={addItem} />
                </div>
            </div>
        </div>
    )
}

export default Card;
