import axios from "axios"
import BASE_URL from "../config/host";

    export const apicall = async(method: string,url: string,data?: object)=>{
        // return axios[method](`${baseUrl}${url}`)
     
        try {
           const res = await axios.request({
             baseURL: BASE_URL,
             url,
             method,
             data,
             headers: { 
                "Content-Type": "multipart/form-data",
                // Authorization
             },
           });  
           
           return res.data;
       
       }
       catch(err){
           console.log(err)
       }
}