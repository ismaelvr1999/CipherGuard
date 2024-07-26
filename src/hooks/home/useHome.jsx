import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/user";
import { getTotalWebAccountsByUser } from "../../api/websiteAccounts";

const useHome = ()=>{
    const [user, setUser] = useState(null);
    const [totalWebsiteAccounts, setTotalwebsiteAccounts] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      getUser({
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((result) => {
          setUser(result.data);
        })
        .catch((error) => {
          console.error("Error fetching getUser:", error.message);
          localStorage.clear();
          navigate("/login");
        });
  
      getTotalWebAccountsByUser({
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((result) => {
        setTotalwebsiteAccounts({total: result.data.data.total, title: "Total Websites Accounts"});
      })
      .catch((error) => {
        console.error("Error fetching TotalWebAccountsByUser:", error.message);
        localStorage.clear();
        navigate("/login");
      });
    }, [setTotalwebsiteAccounts,setUser,navigate]);

    return{
        user,
        totalWebsiteAccounts
    };
};

export default useHome;