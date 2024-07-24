import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getUser } from "../../api/user";
import { getTotalWebAccountsByUser } from "../../api/websiteAccounts";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";
import Profile from "./profile";
import Summary from "./summary";

const Home = () => {
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

  return (
    <>
      <Header title={user && `Welcome ${user.data.first_name}` } />
      <div className="grid-section">
        <Profile user={user} />

        <Summary totalWebsiteAccounts={totalWebsiteAccounts} 
        totalCreditCards={{total:"0",title:"Total Credit Cards"}}
         totalIDs={{total:"0",title:"Total IDs"}}/>
      </div>
    </>
  );
};
export default Home;
