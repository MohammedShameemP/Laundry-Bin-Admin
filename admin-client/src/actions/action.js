import axios from "axios";

export const adminLogin = async (username, password) => {
	const headers = { "Content-type": "application/json" };
	try {
		const response = await axios.post("http://localhost:4007/api/login", { username, password }, { headers });
		console.log(response.data, " = response");
		return response.data;
	} catch (error) {
		console.log("error = ", error);
		return error;
	}
};
export const allUsers = async () => {
	const headers = { "Content-type": "application/json" };
	try {
		const response = await axios.get("http://localhost:4007/api/users", { headers });
		console.log(response.data, " = response");
		return response.data;
	} catch (error) {
		console.log("error = ", error);
		return error.response.data;
	}
};


export const addTime=async (startTime, endTime)=>{
	const headers ={"content-type":"application/json"};
	try {
		const response =await axios.post("http://localhost:4007/api/createTime",{startTime,endTime},{headers});
		console.log("response",response.data);
		return response.data;
		
		
	} catch (error) {
		console.log("error",error);
		return error.response.data;
		
		
	}
};


export const allTime=async()=>{
	const headers ={"content-type":"application/json"};
	try {
	const response=await axios.get("http://localhost:4007/api/allTime",{headers});
	console.log(response.data);
	return response.data;
	
	
		
	} catch (error) {
		console.log("error",error);
		return error.response.data;
		
	}
}

export const deleteTime=async(id)=>{
	const headers ={"content-type":"application/json"};
try {
	const response=await axios.delete(`http://localhost:4007/api/deleteTime?id=${id}`,{headers});
	console.log(response.data);
	return response.data;
} catch (error) {

	console.log("error",error);
	return error.response.data;
	
}

}