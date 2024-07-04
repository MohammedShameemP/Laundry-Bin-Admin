import React, { useState } from 'react'

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteProduct } from '../actions/productAction';

function Deleteproduct({id,fetchAllProducts}) {
    const[open,setOpen]=useState(false);  

    
    const handleClickfirst=()=>{
        setOpen(true)
        
    }
    const handleClose=()=>{
        setOpen(false)
        
    }
    const handleClick=async(e)=>{
        const response=await deleteProduct(id);

        if(response.status){
            console.log(response.status);
            fetchAllProducts();
            setOpen(false);
        }else{
            console.log(response.message);
        }

    }

    



  return (
    <div>
        <React.Fragment>
				<div>
					<button onClick={handleClickfirst} className="deletetbtn">
						Delete
					</button>
				</div>
				<Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
					<DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
						Delete
					</DialogTitle>
					<DialogContent>
						<DialogContentText>Are you sure to delete.</DialogContentText>
					</DialogContent>
					<DialogActions className="dd">
            
						<Button autoFocus onClick={handleClose}>
							Cancel
						</Button>
						<Button onClick={handleClick}>Delete</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
        
        </div>
  )
}


export default Deleteproduct