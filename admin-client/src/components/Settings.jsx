import React, { useState } from "react";
import LaundrySidebar from "./LaundrySidebar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Services from "./Services";
import Products from "./Products";
import "./Settings.css";
import Slot from "./Slot";
// import { service } from "../../../admin-server/controllers/allDataController";


function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const Settings = () => {
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="settingsmain">
			<LaundrySidebar />
			<div className="sanin">
				<div className="profile">
					<img className="profile_bg" src="./—Pngtree—smoky topped black background_464325.png" alt="" />
					<div className="image">
						<img src="./IMG_2232.JPG" width="250px" alt="" />
					</div>
				</div>
				<Box className="set" sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs className="tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="Banner" {...a11yProps(0)} />
							<Tab label="Offers" {...a11yProps(1)} />
							<Tab label="Service" {...a11yProps(2)} />
							<Tab label="Products" {...a11yProps(3)} />
							<Tab label="Slot" {...a11yProps(4)} />
							<Tab label="Item Six" {...a11yProps(5)} />
							<Tab label="Item Seven" {...a11yProps(6)} />
							<Tab label="Item Eight" {...a11yProps(7)} />
							<Tab label="Item Nine" {...a11yProps(8)} />
							<Tab label="Item Ten" {...a11yProps(9)} />
						</Tabs>
					</Box>

					<CustomTabPanel value={value} index={0}>
						Item One
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						Item Two
					</CustomTabPanel>

					<CustomTabPanel value={value} index={2}>
						<Services />
					</CustomTabPanel>

					<CustomTabPanel value={value} index={3}>
						<Products />
					</CustomTabPanel>

					<CustomTabPanel value={value} index={4}>
					<Slot />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={5}>
						Item Six
					</CustomTabPanel>
					<CustomTabPanel value={value} index={6}>
						Item Seven
					</CustomTabPanel>
					<CustomTabPanel value={value} index={7}>
						Item Eight
					</CustomTabPanel>
					<CustomTabPanel value={value} index={8}>
						Item Nine
					</CustomTabPanel>
					<CustomTabPanel value={value} index={9}>
						Item Ten
					</CustomTabPanel>
				</Box>
			</div>
		</div>
	);
};

export default Settings; // Default export




















// export function Service() {
//   const [service, setService] = useState([]);

//   const fetchServices = async () => {
//     const response = await allUsers();
//     if (response.status) {
//       console.log('services = ', response.data);
//       setService(response.data);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   return null;
// }

{
	/* <CustomTabPanel value={value} index={2}>
<div className="table">
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>EmailorPhonenumber</th>
      </tr>
    </thead>
    <tbody>
      {service.map((item, index) => (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.emailorphonenumber}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="cs">
  <button className="btn" onClick={handleClickOpen}>
    Create Service
  </button>
</div>
<Dialog onClose={handleClose} open={open}>
  <DialogTitle>
    Create Service
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent dividers>
    <div className="form">
      <form action="/editproduct/<%= item._id %>" method="post" enctype="multipart/form-data">
        <div>
          <label htmlFor="" className="label2">
            <h2>Product image:</h2>
            <input type="file" name="image" className="file" placeholder="" />
          </label>
        </div>
        <div>
          <label htmlFor="" className="label1">
            <h2>Product name:</h2>
            <input type="text" name="name" className="inp" />
            {/* value="<%= item.name %>" */
}
//           </label>
//         </div>
//         </form>
//         </div>
//         </DialogContent>
//         <DialogActions>
//     <Button autoFocus onClick={handleClose}>
//       Create
//     </Button>
//   </DialogActions>
// </Dialog>
// </CustomTabPanel> */}
