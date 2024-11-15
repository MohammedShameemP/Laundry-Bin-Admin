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
import { addTime } from "../actions/action";

function Slot() {
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);


	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	console.log("startTime",startTime);
	console.log("setEndTime",endTime);
	
	


	const [products, setProducts] = useState([]);
	console.log("products = ", products);


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
		console.log("datas passed to axios");
		const response = await addTime({startTime,endTime});
		if (response.status) {
			console.log(response.message);
		}
		handleClose();

		// fetchAllProducts();
	};

	// const fetchAllProducts = async () => {
	// 	console.log("fetch working");
	// 	const response = await allProducts();
	// 	if (response.status) {
	// 		setProducts(response.data);
	// 	}
	// };
	useEffect(() => {
		// fetchAllProducts();
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
						<th>Slot</th>


						<th>Actions</th>
					</tr>
					{products.map((item, index) => (
						<tr key={index}>
							<td>
							</td>



							<td className="edb">
								<div>{ <Editproduct fetchAllProducts={fetchAllProducts} product={item} id={item._id} /> }</div>
								{ <div>{ <Deleteproduct fetchAllProducts={fetchAllProducts} id={item._id} /> }</div> }
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
									<input type="time" name="name" className="inp" placeholder="" onChange={(e) => setStartTime(e.target.value)} />
									<input type="time" name="name" className="inp" placeholder="" onChange={(e) => setEndTime(e.target.value)} />
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
