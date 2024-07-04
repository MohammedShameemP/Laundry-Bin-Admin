import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Settings.css";
import { editService } from "../actions/serviceAction";

const EditService = ({ fetchAllServices,services, id }) => {
	const [name, setName] = useState("");
	const [image, setImage] = useState([]);

	const [open, setOpen] = useState(false);

	const findItem = () => {
		const item = services.find((item) => item._id === id);
		setName(item.servicename);
		console.log({ item });
	};
	const handleClickOpen = () => {
		findItem();
		setOpen(true);
	};
	const handleClose = () => {
		findItem();
		setOpen(false);
	};
	const handleEdit = async (e) => {
		e.preventDefault();
		const response = await editService(id, image, name);
		if (response.status) {
			fetchAllServices()
			console.log(response.message);
		}

		console.log("data passed");

		setOpen(false);
	};

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
						<form
							onSubmit={(e) => {
								e.preventDefault(); /* handle form submission */
							}}>
							<div>
								<label htmlFor="image" className="label2">
									<h2>Product image:</h2>
									<input type="file" name="image" className="file" placeholder="fgfg" onChange={(e) => setImage(e.target.files[0])} />
								</label>
							</div>
							<div>
								<label htmlFor="name" className="label1">
									<h2>Product name:</h2>
									<input type="text" name="name" className="inp" value={name} placeholder="Product name....................." onChange={(e) => setName(e.target.value)} />
								</label>
							</div>
							<DialogActions>
								<Button className="editclk" type="submit" autoFocus onClick={handleEdit}>
									Edit
								</Button>
							</DialogActions>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default EditService;
