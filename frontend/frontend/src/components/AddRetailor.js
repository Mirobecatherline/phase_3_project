import React,{useState} from "react";

function AddRetailor({addnew}) {
    
    const[newretailor,setnewretailor]=useState({name:"",location:""})
function handlesubmit(e) {
    e.preventDefault();
    addnew(newretailor)
    setnewretailor({name:"",location:""})
} 

function handlechange(e) {
    setnewretailor({...newretailor,[e.target.name]:e.target.value})
}
 

    return(
        <form style={{width:"70%",margin:"20px"}}   onChange={handlechange}  onSubmit={handlesubmit} >
                <h2>Add a new retailor</h2>
                    <div className="mb-3">
                        <label for="titleinput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="titleinput" name="name" value={newretailor.name}/>
                        <div id="emailHelp" className="form-text">please input your name.</div>
                    </div>
                    <div className="mb-3">
                        <label for="categoryinput" className="form-label">Location</label>
                        <input type="text" className="form-control" id="categoryinput" name="location" value={newretailor.location}/>
                        <div id="emailHelp" className="form-text">please input your location.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Retailor</button>
            </form>
    );
}
export default AddRetailor;