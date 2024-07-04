import React from "react";
import "./Admin_home.css";
import LaundrySidebar from "./LaundrySidebar";

function Admin_home() {
	return (
		<div className="homemain">
			<div>
				<LaundrySidebar />
			</div>
			<div className="dashboardlist">
				<div className="dashboardlist1">
					Orders<p className="p1"></p>
				</div>
				<div className="dashboardlist1">
					Users<p className="p1"></p>
				</div>
				<div className="dashboardlist1">
					Order<p className="p1"></p>
				</div>
			</div>
		</div>
	);
}

export default Admin_home;
