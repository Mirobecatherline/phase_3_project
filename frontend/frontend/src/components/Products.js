import React,{useEffect, useState} from "react";

function Product() {
 const [product,setproduct]=useState([])
    
  
 useEffect(()=>{
    fetch ("https://fakestoreapi.com/products")
    .then (res=>res.json())
    .then (data=>setproduct(data) )
        },[])
       

 return(
        <div>
          {product.map((data)=>{
            
            return console.log(data.title)
        })}
        </div>
    )
}
export default Product;