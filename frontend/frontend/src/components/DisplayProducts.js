import React from "react";
function DisplayProducts({products}) {
   
    return(
        <div >
               <div style={{width:"400px",margin:"10px"}}>
               <p class="fw-bold text-center fs-4 text-decoration-underline" > Product number {products.id}</p>
                <img src={products.image} alt="..." style={{objectFit:"fill",margin:"40px",width:"200px",}}/>
                
                <p>{products.title}</p>
                <p>{products.category}</p>
                <p>{products.description}</p>
                </div>
            
        </div>
   ); 
}
export default DisplayProducts