import React,{useEffect, useState} from "react";

import DisplayProducts from "./DisplayProducts";

function Products() {
 const [product,setproduct]=useState([])
    
  
 useEffect(()=>{
    fetch ("http://localhost:9292/products")
    .then (res=>res.json())
    .then (data=>setproduct(data) )
        },[])
       

 return(
        <div>
          {product.map((data)=>{
           return <DisplayProducts products={data} key={data.id}/>
           
        })}
        </div>
    )
}
export default Products;