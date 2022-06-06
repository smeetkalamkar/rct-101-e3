import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Product from "./Product/Product";

const Products = () => {
  const [todos,setTodos] = useState([]);
  const {isAuth} = useContext(AuthContext);
  useEffect(()=>{
    if(isAuth){
      let fetchTodos = async ()=>{
        let r = await fetch("http://localhost:8080/products");
        let d = await r.json();
        setTodos(d)
    }
    fetchTodos()
    }
  },[])
 
    console.log(todos)
  return <div className="products">
    
    {/* Code here */

     todos.map((todo)=>{
      return <Product todo={todo} todos={todos}/>
     })
  }</div>;
};

export default Products;
