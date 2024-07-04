import React, { useEffect, useState } from "react";
import LaundrySidebar from "./LaundrySidebar";
import { allUsers } from "../actions/action";
import "./Users.css";

function Users() {
	const [users, setUsers] = useState([]);
	console.log({ users });

	const fetchUsers = async () => {
		const response = await allUsers();
		if (response.status) {
			console.log("users = ", response.data);
			setUsers(response.data);
		}
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="usermain">
			<div>
				<LaundrySidebar />
			</div>

			<div className="table">
				<table>
					<tr>
						<th>Username</th>
						<th>EmailorPhonenumber</th>
					</tr>
					{users.map((item, index) => (
						<tr>
							<td>{item.username}</td>
							<td>{item.emailorphonenumber}</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}

export default Users;
