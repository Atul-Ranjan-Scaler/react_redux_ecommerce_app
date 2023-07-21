import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";

function CartPage(){

  const dispatch = useDispatch();
  const cart  = useSelector((state)=> state.cart.cart);
  console.log(cart);

  const deleteItem = ((item)=>{
    dispatch({ type:'DELETE_ITEM', 
      payload: {
        item : item,
      } });
  })

  return (
    <div className='cart_page'>
      <div className='cart_page__items'>
        {
          cart.map((item)=> <CartItem key={item.id} item={item} deleteItem={deleteItem}/> )
        }
      </div>
    </div>
  )
}

export default CartPage;
