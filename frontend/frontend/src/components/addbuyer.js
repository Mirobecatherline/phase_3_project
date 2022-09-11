import React,{useState} from "react";

function AddBuyer({addnew}) {
    
    const[newbuyer,setnewbuyer]=useState({name:"",location:"",gender:""})
function handlesubmit(e) {
    e.preventDefault()
    addnew(newbuyer);
    setnewbuyer({name:"",location:"",gender:""})
} 

function handlechange(e) {
    setnewbuyer({...newbuyer,[e.target.name]:e.target.value})
}
 

    return(
        <form style={{width:"70%",margin:"20px"}}   onChange={handlechange}  onSubmit={handlesubmit} >
                <h2>Add a new buyer</h2>
                    <div className="mb-3">
                        <label for="titleinput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="titleinput" name="name" value={newbuyer.name}/>
                        <div id="emailHelp" className="form-text">please input your name.</div>
                    </div>
                    <div className="mb-3">
                        <label for="categoryinput" className="form-label">Location</label>
                        <input type="text" className="form-control" id="categoryinput" name="location" value={newbuyer.location}/>
                        <div id="emailHelp" className="form-text">please input your location.</div>
                    </div>
                    <div className="mb-3">
                        <label for="priceinput" className="form-label">Price</label>
                        <input type="text" className="form-control" id="priceinput" name="gender" value={newbuyer.gender}/>
                        <div id="emailHelp" className="form-text">please input your price.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Buyer</button>
            </form>
    );
}
export default AddBuyer;