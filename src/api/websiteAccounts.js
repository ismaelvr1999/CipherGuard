import axios from "./axios";

export const getTotalWebAccountsByUser = async (RequestConfig)=>{
    return await axios.get("/website-account/total",RequestConfig);
}

export const getAllWebsiteAccounts = async (RequestConfig)=>{
    return await axios.get("/website-account",RequestConfig);
}

