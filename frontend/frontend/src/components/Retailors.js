import React, { useEffect, useState } from "react";

import AddRetailor from "./AddRetailor";

function Retailors(params) {
    const[buyers,setbuyers]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then(data=>setbuyers(data))
        
    },[])
  
    function addnew(newadded) {
        const configObject={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newadded)
        }
        fetch("https://fakestoreapi.com/products",configObject)
        .then (res=>res.json())
        .then (data=>setbuyers(currentdata=>[...currentdata,data]) )                
  }


    return(
        <div>
            <AddRetailor addnew={addnew}/>
            <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">CATEGORY</th>
                        </tr>
                    </thead>
            {buyers.map((buyers)=>
                
                    <tbody key={buyers.id}>
                        <tr>
                        <th scope="row">{buyers.id}</th>
                        <td>{buyers.title}</td>
                        <td>{buyers.price}</td>
                        <td>{buyers.category}</td>
                        </tr>
                    </tbody>
                   
)}
 </table>
        </div>
    );
}
export default Retailors;