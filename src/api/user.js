import axios from "./axios";

export const getUser = (req)=>{
    return axios.get("/user",req);
}
