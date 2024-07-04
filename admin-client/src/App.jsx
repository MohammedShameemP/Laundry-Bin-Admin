import { Route, Routes } from "react-router-dom";
import Admin_login from "./components/Admin_login";
import Admin_home from "./components/Admin_home";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Orders from "./components/Orders.";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Admin_login />} />
			<Route path="/Admin_home" element={<Admin_home />} />
			<Route path="/Users" element={<Users />} />
			<Route path="/Settings" element={<Settings />} />
			<Route path="/Orders" element={<Orders />} />
		</Routes>
	);
}

export default App;
