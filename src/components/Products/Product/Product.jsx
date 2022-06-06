import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
  const {setaddItem} = useContext(CartContext)
  
  const product = { id: props.todo.id };
 
 
  return (
    <div data-cy={`product-${product.id}`} className="product" >
      <h3 data-cy="product-name">{props.todo.name}</h3>
      <h6 data-cy="product-description">{props.todo.description}</h6>
      <button data-cy="product-add-item-to-cart-button" >Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
