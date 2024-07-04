import React from "react";
import "./LaundrySidebar.css";
import { Link } from "react-router-dom";

function LaundrySidebar() {
	return (
		<div>
			<div className="sidemain">
				<div className="heading">
					<img width="40px" src="./Group 1138.png" alt="" />
					<p className="p1">Laundrybin</p>
				</div>

				<div className="items">
					<div className="a">
						<Link to="/Admin_home" className="link">
							<img src="./Property 1=bold.png" alt="" />
							Dashboard
						</Link>
					</div>
					<div className="a">
						<Link to="/Users" className="link">
							<img src="./user.png" alt="" />
							Users
						</Link>
					</div>
					<div className="a">
						<Link to="/Orders" className="link">
							<img src="./order.png" alt="" />
							Orders
						</Link>
					</div>
					<div className="a">
						<Link to="/Settings" className="link">
							<img src="./Frame (1).png" alt="" />
							Settings
						</Link>
					</div>
					<div className="a">
						<Link className="link">
							<img src="./icons8-logout-50.png" alt="" width="20px" />
							Logout
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LaundrySidebar;
