import axios from "./axios";

export const getUser = async (req)=>{
    return await axios.get("/user",req);
}
