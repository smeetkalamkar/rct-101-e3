import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [addItem,setaddItem] = useState({})

  // useEffect(()=>{

  //   const uploadData = async ()=>{
  //        axios({
  //           method: 'post',
  //           url: 'http://localhost:8080/cartItems',
  //           data: addItem
  //         })
  //       }
  //   uploadData()
        

  // },[addItem])
  
  
  
  return <CartContext.Provider value={{setaddItem}}>{children}</CartContext.Provider>;
};
