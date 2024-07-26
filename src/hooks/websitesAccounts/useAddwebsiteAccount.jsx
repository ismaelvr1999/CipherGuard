import { useNavigate } from "react-router-dom";
import { addWebsiteAccount } from "../../api/websiteAccounts";

const useAddwebsiteAccount = (inputs)=>{
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const category = inputs.category || "social_media";
      const newWebsiteAccount = {...inputs,category:category};
      const headers ={headers: {Authorization: localStorage.getItem("token")}};
      await addWebsiteAccount(newWebsiteAccount,headers)
      .then(()=>{
        alert("Account added");
        navigate("/website-accounts")
      })
      .catch(error => console.log(error.message))
    };

    return{
        handleSubmit
    }
}

export default useAddwebsiteAccount;