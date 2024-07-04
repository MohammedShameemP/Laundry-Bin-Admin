import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Settings.css";
import { addProduct, editProduct } from "../actions/productAction";
// import { editProducts } from "../actions/serviceAction";

function Editproduct({ fetchAllProducts, product, id }) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState(null);

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	console.log(product, id, "namenamenamename");

	

	const handleSubmit = async (e) => {
		
		e.preventDefault();
		const response =await editProduct(id,name,image,price);
		if(response.status){
			fetchAllProducts()
		}
		setOpen(false);

		
	};

	useEffect(() => {
		setName(product.name);
		setPrice(product.price);
	}, []);
	
	return (
		<>
			<button className="abs" onClick={handleClickOpen}>
				<img src="edit.png" alt="" />
			</button>
			<Dialog onClose={handleClose} open={open}>
				<DialogTitle>
					<p className="headc">Edit Product</p>
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent dividers>
					<div className="form">
						<form action="">
							<div>
								<label htmlFor="">
									<h2>Product Image</h2>
									<img src={image ? URL.createObjectURL(image) : product.image} alt="" />
									<input type="file" placeholder="" onChange={(e) => setImage(e.target.files[0])} />
								</label>
							</div>
							<div>
								<label htmlFor="">
									<h2>Product Name</h2>
									<input type="text" value={name} placeholder="" onChange={(e) => setName(e.target.value)} />
								</label>
							</div>
							<div>
								<label htmlFor="">
									<h2>Product Price</h2>
									<input type="text" value={price} placeholder="" onChange={(e) => setPrice(e.target.value)} />
								</label>
							</div>
								<div className="btdiv">
									<button className="edit_btn" onClick={handleSubmit}>Edit</button>
								</div>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default Editproduct;
