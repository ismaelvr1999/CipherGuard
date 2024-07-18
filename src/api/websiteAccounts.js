import axios from "./axios";

export const getTotalWebAccountsByUser = async (RequestConfig)=>{
    return await axios.get("/website-account/total",RequestConfig);
}

export const getAllWebsiteAccounts = async (RequestConfig)=>{
    return await axios.get("/website-account",RequestConfig);
}

export const addWebsiteAccount = async (newWebsiteAccount,headers)=>{
    return await axios.post("/website-account",newWebsiteAccount,headers);
}

export const getWebsiteAccount = async (page_id)=>{
    return await axios.get(`/website-account/${page_id}`,{
        headers: {
          Authorization: localStorage.getItem("token")
        },
      });
}

export const updateWebAccount = async (websiteAccount)=>{
    return await axios.put(`/website-account`,websiteAccount,{
        headers: {
          Authorization: localStorage.getItem("token")
        },
      });
}

export const deleteWebAccount = async (id)=>{
  return await axios.delete(`/website-account/${id}`,{
      headers: {
        Authorization: localStorage.getItem("token")
      },
    });
}

export const searchWebAccount = async (searchValue)=>{
  return await axios.get(`/website-account`,{
      headers: {
        Authorization: localStorage.getItem("token")
      },
      params: {
        search: searchValue.trim()
    }
    });
}

