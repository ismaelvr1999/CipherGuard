import axios from "./axios";

export const getTotalPassportsByUser = async ()=>{
    return await axios.get("/passports/total",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    });
}

export const getPassports = async()=>{
    return await axios.get("/passports",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
};

export const getPassport = async(passport_id)=>{
    return await axios.get(`/passports/${passport_id}`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
};


export const addPassport = async (newPassport)=>{
    return await axios.post("/passports",newPassport,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    });
};

export const updatePassport = async (passport)=>{
    return await axios.put(`/passports/${passport.passport_id}`,passport,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
};

export const deletePassport = async (id)=>{
    return await axios.delete(`/passports/${id}`,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
};

export const searchPassport = async (searchValue)=>{
    return await axios.get(`/passports`,{
        headers: {
          Authorization: localStorage.getItem("token")
        },
        params: {
          search: searchValue.trim()
      }
      });
};