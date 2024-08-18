import axios from "./axios";

export const getUser = async (req)=>{
    return await axios.get("/user",req);
}

export const signUp = async(newUser)=>{
    return await axios.post("/user/sign-up",newUser)
}