import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/user";
import { getTotalWebAccountsByUser } from "../../api/websiteAccounts";
import { getTotalCardsByUser } from "../../api/cards";
import { getTotalPassportsByUser } from "../../api/passports";

const useHome = ()=>{
    const [user, setUser] = useState(null);
    const [totalWebsiteAccounts, setTotalwebsiteAccounts] = useState(null);
    const [cardTotal, setCardTotal] = useState(null);
    const [passportsTotal,setPassportsTotal] = useState(null);
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
        setTotalwebsiteAccounts({total: result.data.data.total, title: "Total of Websites Accounts"});
      })
      .catch((error) => {
        console.error("Error fetching TotalWebAccountsByUser:", error.message);
        localStorage.clear();
        navigate("/login");
      });

      getTotalCardsByUser().then((result) => {
        setCardTotal({total: result.data.data.total, title: "Total of Cards"});
      })
      .catch((error) => {
        console.error("Error fetching TotalGetTotalCardsByUser:", error.message);
        localStorage.clear();
        navigate("/login");
      });

      getTotalPassportsByUser().then((result) => {
        setPassportsTotal({total: result.data.data.total, title: "Total of Passports"});
      })
      .catch((error) => {
        console.error("Error fetching getTotalPassportsByUser:", error.message);
        localStorage.clear();
        navigate("/login");
      });
    }, [navigate]);

    return{
        user,
        totalWebsiteAccounts,
        cardTotal,
        passportsTotal
    };
};

export default useHome;