import axios from "axios";


export const allServices = async () => {
	const headers = { "Content-type": "application/json" };
	try {
		const response = await axios.get("http://localhost:2007/api/all_services", { headers });
		console.log(response.data, " = response");
		return response.data;
	} catch (error) {
		console.log("error = ", error);
		return error.response.data;
	}
};
export const addService = async (image,name) => {
	const headers = { "Content-type": "multipart/form-data" };	
	try {
		const response = await axios.post("http://localhost:2007/api/createservice",{image,name},{ headers });
		console.log(response.data, " = response");
		return response.data;
	} catch (error) {
		console.log("error = ", error);
		return error.response.data;
	}
};


export const editService =async(id,image,name)=>{
	const headers ={"Content-type":"multipart/form-data"}
	try{
		const response =await axios.post(`http://localhost:2007/api/editservice?id=${id}`,{image,name},{headers});
		console.log("response=",response.data);
		return response.data;
	}catch(error){
		console.log("error=",error);
		return error.respponse.data;
	}
}


export const deleteService =async(id)=>{
   const headers = { "Content-type": "application/json" };
   try{
	const response =await axios.delete(`http://localhost:2007/api/deleteservice?id=${id}`,{headers});
	console.log("response=",response);
	return response.data;
   }
   catch(error){
	console.log("error=",error);
	return error.response.data;
   }
}