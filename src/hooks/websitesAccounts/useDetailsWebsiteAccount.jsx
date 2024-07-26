import { getWebsiteAccount,updateWebAccount } from "../../api/websiteAccounts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const useDetailWebsiteAccount = (page_id) =>{
    const formRef = useRef(null);
    const [websiteAccount, setWebsiteAccount] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      getWebsiteAccount(page_id)
        .then((result) => {
          setWebsiteAccount(result.data.data);
        })
        .catch((error) => {
          console.error("Error fetching getAllWebsiteAccounts:", error.message);
          localStorage.clear();
          navigate("/login");
        });
    }, [page_id,navigate]);
  
  
    const updateWebsiteAccount = async() => {
      const formData = new FormData(formRef.current);
      const updateWebsiteAccount = {};
      for (const pair of formData.entries()) {
          updateWebsiteAccount[pair[0]] = pair[1]
      }
      await updateWebAccount(updateWebsiteAccount)      
      .then(() => {
        alert("WebsiteAccount updated");
      })
      .catch((error) => {
        console.error("Error fetching updateWebsiteAccount:", error.message);
        localStorage.clear();
        navigate("/login");
      });
    };
  return {
    formRef,
    websiteAccount,
    updateWebsiteAccount
  };
};

export default useDetailWebsiteAccount;