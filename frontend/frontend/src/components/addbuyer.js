import React,{useState} from "react";

function AddBuyer({addnew}) {
    
    const[newbuyer,setnewbuyer]=useState({title:"",category:"",price:""})
function handlesubmit(e) {
    e.preventDefault()
    addnew(newbuyer);
    setnewbuyer({title:"",category:"",price:""})
} 

function handlechange(e) {
    setnewbuyer({...newbuyer,[e.target.name]:e.target.value})
}
 

    return(
        <form style={{width:"70%",margin:"20px"}}   onChange={handlechange}  onSubmit={handlesubmit} >
                <h2>Add a new buyer</h2>
                    <div className="mb-3">
                        <label for="titleinput" className="form-label">Title</label>
                        <input type="text" className="form-control" id="titleinput" name="title" value={newbuyer.title}/>
                        <div id="emailHelp" className="form-text">please input your title.</div>
                    </div>
                    <div className="mb-3">
                        <label for="categoryinput" className="form-label">Category</label>
                        <input type="text" className="form-control" id="categoryinput" name="category" value={newbuyer.category}/>
                        <div id="emailHelp" className="form-text">please input your category.</div>
                    </div>
                    <div className="mb-3">
                        <label for="priceinput" className="form-label">Price</label>
                        <input type="text" className="form-control" id="priceinput" name="price" value={newbuyer.price}/>
                        <div id="emailHelp" className="form-text">please input your price.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
    );
}
export default AddBuyer;