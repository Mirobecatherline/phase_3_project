import React, { useEffect, useState } from "react";

import AddBuyer from "./addbuyer";

function Buyers() {
    const[buyers,setbuyers]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:9292/buyers")
        .then((res)=>res.json())
        .then(data=>setbuyers(data))
        
    },[])
    
   function addnew(newadded) {
    
        
            const configObject={
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newadded)
            }
            fetch("http://localhost:9292/buyers",configObject)
            .then (res=>res.json())
            .then (data=>setbuyers(currentdata=>[...currentdata,data]) )                
      }
      function handleclick({id}){
        
        setbuyers(buyers.filter(i=>i.id !==id))
        fetch(`http://localhost:9292/buyers/${id}`,{
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
                        <tr>List of all buyers</tr>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">DELETE</th>
                        </tr>
                    </thead>
            {buyers.map((buyers,index)=>
                
                    <tbody key={index}>
                        <tr>
                        <th scope="row">{buyers.id}</th>
                        <td>{buyers.name}</td>
                        <td>{buyers.location}</td>
                        <td>{buyers.gender}</td>
                        <td><button type="button" class="btn btn-outline-danger" onClick={()=> handleclick(buyers)}>Delete</button></td>
                        </tr>
                    </tbody>
                   )}
            </table>
        </div>
    );
}
export default Buyers;