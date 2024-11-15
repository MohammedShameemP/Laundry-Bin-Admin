import axios from 'axios'

export const addProduct=async (data)=>{
	const headers = { "Content-type": "multipart/form-data" };	
try {
    const response = await axios.post("http://localhost:2007/api/createProduct",data, { headers });
    return response.data
    // console.log("in axios");

    
} catch (error) {
    console.log("error in ax = ", error);
    return error.response.data;

    
}

}


export const allProducts=async ()=>{
    const headers = { "Content-type": "application/json" };
    try {
        const response = await axios.get("http://localhost:2007/api/allProduct", { headers });
        console.log(response.data);
        console.log("in all");
    return response.data

    
} catch (error) {
    console.log("error = ", error);
    return error.response.data;

    
}

}



    export const editProduct=async (id,name,image,price)=>{
        const headers ={"Content-type":"multipart/form-data"};
        try {
            const response =await axios.post(`http://localhost:2007/api/editProduct?id=${id}`,{name,image,price},{headers})
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log("error = ", error);
            return error.response.data;

        }
    }


    export const deleteProduct =async(id)=>{
        const headers ={"Content-type": "application/json"};
        try {
            const response =await axios.delete(`http://localhost:2007/api/deleteProduct?id=${id}`,{headers})
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log("error=",error.response.data);
            return error.response.data;
            
        }
    }