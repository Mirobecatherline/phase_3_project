import React, { useEffect, useState } from "react";

function Buyers(params) {
    const[buyers,setbuyers]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then(data=>setbuyers(data))
        
    },[])
    console.log(buyers);

    return(
        <div>
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
                
                    <tbody>
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
export default Buyers;