import React, { useEffect, useState } from "react";

import AddRetailor from "./AddRetailor";

function Retailors(params) {
    const[buyers,setbuyers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/retailors")
        .then((res)=>res.json())
        .then(data=>setbuyers(data))
        
    },[])
  
    function addnew(newadded) {
        const configObject={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newadded)
        }
        fetch("http://localhost:9292/retailors",configObject)
        .then (res=>res.json())
        .then (data=>setbuyers(currentdata=>[...currentdata,data]) )                
  }
  function handleclick({id}){
        
    setbuyers(buyers.filter(i=>i.id !==id))
    fetch(`http://localhost:9292/retailors/${id}`,{
        method: 'DELETE'
    })
        .then(resp => resp.json())
        .then()
  }


    return(
        <div>
            <br/>
             <p class="fw-bold text-center fs-1 text-decoration-underline" > Welcome to retailor page</p>
            <AddRetailor addnew={addnew}/>
            <table className="table table-bordered">
                    <thead>
                        <tr className="fw-bold text-center fs-2">List of all retailors</tr>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">DELETE</th>
                        </tr>
                    </thead>
            {buyers.map((buyers)=>
                
                    <tbody key={buyers.id}>
                        <tr>
                        <th scope="row">{buyers.id}</th>
                        <td>{buyers.name}</td>
                        <td>{buyers.location}</td>
                        <td><button type="button" class="btn btn-outline-danger" onClick={()=> handleclick(buyers)}>Delete</button></td>
                        </tr>
                    </tbody>
                   
)}
 </table>
        </div>
    );
}
export default Retailors;