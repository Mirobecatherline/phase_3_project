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
            <br/>
        <p class="fw-bold text-center fs-1 text-decoration-underline" > Welcome to product page</p>
          <div className="flex-wrap" style={{justifyContent:"center",flexDirection:"row",display:"flex"}}>
          {product.map((data)=>{
           return <DisplayProducts products={data} key={data.id}/>
           
        })}
        </div>
        </div>
    )
}
export default Products;