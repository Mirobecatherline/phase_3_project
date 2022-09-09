import React, { useEffect, useState } from "react";

import AddBuyer from "./addbuyer";

function Buyers() {
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
      function handleclick({id}){
        
        setbuyers(buyers.filter(i=>i.id !==id))
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
      }

    return(
        <div>
            <AddBuyer addnew={addnew}/>
            <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">CATEGORY</th>
                        <th scope="col">DELETE</th>
                        </tr>
                    </thead>
            {buyers.map((buyers,index)=>
                
                    <tbody key={index}>
                        <tr>
                        <th scope="row">{buyers.id}</th>
                        <td>{buyers.title}</td>
                        <td>{buyers.price}</td>
                        <td>{buyers.category}</td>
                        <td><button type="button" class="btn btn-outline-danger" onClick={()=> handleclick(buyers)}>Delete</button></td>
                        </tr>
                    </tbody>
                   )}
            </table>
        </div>
    );
}
export default Buyers;