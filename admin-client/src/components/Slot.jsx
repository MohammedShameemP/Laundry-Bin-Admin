import { useEffect, useState } from "react";
import "./Settings.css";
// import LaundrySidebar from "./LaundrySidebar";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Editproduct from "./Editproduct";
import Deleteproduct from "./Deleteproduct";
import { addTime,allTime } from "../actions/action";

function Slot() {
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);


	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	// console.log("startTime",startTime);
	// console.log("setEndTime",endTime);
	
	


	const [time, setTime] = useState([]);
	console.log("time = ", time);


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		console.log("startTime:", startTime);
		console.log("endTime:", endTime);
	
		try {
			const response = await addTime(startTime, endTime); 
			console.log("returned to add res");
			// Pass values properly
			if (response.status) {
				console.log(response.message);
			}
		} catch (error) {
			console.error("Error submitting time:", error);
		}
	
		handleClose();
	};

	const handleDelete=async(id)=>{
		console.log("id",id);
		try {
			const reponse=await deleteTime(id);
			if(reponse.status){
				console.log(reponse.message);
				
			}

		} catch (error) {
			console.log(res.error);
			
			
		}
		


	}

	const fetchAllProducts = async () => {
		console.log("fetch working");
		const response = await allTime();
		if (response.status) {
			setTime(response.data);
		}
	};
	useEffect(() => {
		fetchAllProducts();
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
						<th>Start Time</th>
						<th>End Time</th>
						<th>Actions</th>
					</tr>
					{time.map((item, index) => (
						<tr key={index}>
							<td>
								{item.startTime}
							</td>
							<td>
								{item.endTime}
							</td>



							<td className="edb">
								{ <div>{ <Button onClick={()=>handleDelete=(item._id)}>Delete</Button> }</div> }
							</td>
						</tr>
					))}
				</table>
			</div>

			<Dialog onClose={handleClose} open={open}>
				<DialogTitle>
					<p className="headp">Create Product</p>

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
						<form action="/editproduct/<%= item._id %>" method="post" enctype="multipart/form-data">

							<div>
								<label htmlFor="" className="label1">
									<h2>Time:</h2>
									<input type="time" name="startTime" className="inp" placeholder="" onChange={(e) => setStartTime(e.target.value)} />
									<input type="time" name="endTime" className="inp" placeholder="" onChange={(e) => setEndTime(e.target.value)} />
								</label>
							</div>
						</form>
					</div>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleSubmit}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Slot;
