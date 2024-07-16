import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Icon } from "@iconify/react";
import { getUser } from "../../api/user";
import { getTotalWebAccountsByUser } from "../../api/websiteAccounts";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [totalwebsiteAccounts, setTotalwebsiteAccounts] = useState(null);

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
        return <Navigate to="/login"/>
      });

    getTotalWebAccountsByUser({
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((result) => {
      setTotalwebsiteAccounts(result.data);

    })
    .catch((error) => {
      console.error("Error fetching TotalWebAccountsByUser:", error.message);
      localStorage.clear();
      return <Navigate to="/login"/>
    });
  }, [setTotalwebsiteAccounts,setUser]);

  return (
    <>
      <header className="grid-header">
        {user && <h2>Welcome {user.data.first_name}</h2>}
      </header>
      <div className="grid-section">
        <div className="container-profile">
          <div className="profile-picture">
            <Icon icon="iconoir:user-circle" />
          </div>

          <div className="profile-info">
            {user && (
              <>
                <h3>First Name</h3>
                <input
                  type="text"
                  value={user.data.first_name || ""}
                  readOnly
                />

                <h3>Last Name</h3>
                <input type="text" value={user.data.last_name || ""} readOnly />

                <h3>Email</h3>
                <input type="text" value={user.data.email || ""} readOnly />
              </>
            )}
          </div>
        </div>

        <div className="summary-container">
          <div className="summary-card">
            <Icon
              className="summary-icon"
              icon="material-symbols-light:password"
            />
            <h3>Total Websites Accounts</h3>
             <h3>{totalwebsiteAccounts && totalwebsiteAccounts.data.total}</h3>
          </div>
          <div className="summary-card">
            <Icon className="summary-icon" icon="quill:creditcard" />
            <h3>Total Credit Cards</h3>
            <h3>0</h3>
          </div>
          <div className="summary-card">
            <Icon className="summary-icon" icon="solar:user-outline" />
            <h3>Total IDs</h3>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
