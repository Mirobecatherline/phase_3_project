import React,{useState} from "react";

function AddRetailor({addnew}) {
    
    const[newretailor,setnewretailor]=useState({title:"",category:"",price:""})
function handlesubmit(e) {
    e.preventDefault();
    addnew(newretailor)
    setnewretailor({title:"",category:"",price:""})
} 

function handlechange(e) {
    setnewretailor({...newretailor,[e.target.name]:e.target.value})
}
 

    return(
        <form style={{width:"70%",margin:"20px"}}   onChange={handlechange}  onSubmit={handlesubmit} >
                <h2>Add a new buyer</h2>
                    <div className="mb-3">
                        <label for="titleinput" className="form-label">Title</label>
                        <input type="text" className="form-control" id="titleinput" name="title" value={newretailor.title}/>
                        <div id="emailHelp" className="form-text">please input your title.</div>
                    </div>
                    <div className="mb-3">
                        <label for="categoryinput" className="form-label">Category</label>
                        <input type="text" className="form-control" id="categoryinput" name="category" value={newretailor.category}/>
                        <div id="emailHelp" className="form-text">please input your category.</div>
                    </div>
                    <div className="mb-3">
                        <label for="priceinput" className="form-label">Price</label>
                        <input type="text" className="form-control" id="priceinput" name="price" value={newretailor.price}/>
                        <div id="emailHelp" className="form-text">please input your price.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
    );
}
export default AddRetailor;