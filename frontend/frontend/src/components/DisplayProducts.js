import React from "react";
function DisplayProducts({products}) {
   
    return(
        <div>
            <div className="d-flex flex-wrap" >
                <div>
                <img src={products.image} alt="..."/>
                <figcaption className="figure-caption">A caption for the above image.</figcaption>
                </div>
            </div>
        </div>
   ); 
}
export default DisplayProducts