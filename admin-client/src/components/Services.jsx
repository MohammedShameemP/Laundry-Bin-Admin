import React, { useState, useEffect } from "react";
import "./Settings.css";

// Import if used elsewhere in your component

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { addService, allServices } from "../actions/serviceAction";
import { Box, Typography } from "@mui/material";
import EditService from './EditService'
import Deleteservice from './Deleteservice'

function Services() {
	const [name, setName] = useState("");
	const [image, setImage] = useState([]);
	const [services, setServices] = useState([]);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleCreate = async (e) => {
		e.preventDefault();

		console.log("data passed");

		const response = await addService(image, name);

		if (response.status) {
			console.log(response.message);
		}
		fetchAllServices();

		setOpen(false);
	};

	const handleClose = () => {
		setOpen(true);
	};

	const fetchAllServices = async () => {
		const response = await allServices();
		if (response.status) {
			setServices(response.data);
		}
	};
	useEffect(() => {
		fetchAllServices();
	}, []);

	return (
		<div>
			<div className="cs">
				<button className="btn" onClick={handleClickOpen}>
					Create Product
				</button>
			</div>

			<div className="table">
				<table>
					<tr>
						<th>Images</th>
						<th>Services</th>
						<th>Actions</th>
					</tr>
					{services.map((item, index) => (
						<tr key={index}>
							<td>
								<img src={item.image} alt="" />
							</td>

							<td>{item.servicename}</td>
							<td className="edb">
								<div>
									<EditService fetchAllServices={fetchAllServices} services={services} id={item._id} />
								</div>
								<div>
									<Deleteservice fetchAllServices={fetchAllServices} id={item._id} />
								</div>
							</td>
						</tr>
					))}
				</table>
			</div>

			<Dialog onClose={handleClose} open={open}>
				<DialogTitle>
					<Typography sx={{ color: "black", fontWeight: 400, fontSize: "18px" }}>Create Product</Typography>
					<IconButton
						aria-label="close"
						onClick={()=>setOpen(false)}
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
					<Box className="form">
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
									<input type="text" name="name" className="inp" placeholder="Product name....................." onChange={(e) => setName(e.target.value)} />
								</label>
							</div>
							<DialogActions>
								<Button type="submit" autoFocus onClick={handleCreate}>
									Create
								</Button>
							</DialogActions>
						</form>
					</Box>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default Services;
