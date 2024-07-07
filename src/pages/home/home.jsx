import React, { useEffect, useLayoutEffect, useState } from "react";
import "../../styles/home.css";
import { Icon } from "@iconify/react";
import { getUser } from "../../api/user";
import { useNavigate } from "react-router-dom";


const Home =  () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    getUser({
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then((result) => {
      setUser(result.data); 
    }).catch(error => {
      console.error('Error fetching user:', error);
      localStorage.clear();
      navigate("/");
    });
  }, []);
    
  return (
    <>
      <header className="grid-header">
        {user && <h1>Welcome {user.data.first_name}</h1>}
      </header>
      <div className="grid-section">

        <div className="container-profile">

          <div  className="profile-picture">
            <Icon  icon="solar:user-outline" />
          </div>

          <div className="profile-info">
  
            {user && (
              <>
                <h3>First Name</h3>
                <input type="text" value={user.data.first_name || ''} readOnly />

  
                <h3>Last Name</h3>
                <input type="text" value={user.data.last_name || ''} readOnly />
  
                <h3>Email</h3>
                <input type="text" value={user.data.email || ''} readOnly />
              </>
            )}

          </div>

        </div>

        <div className="summary-container">
            <div className="summary-card">
            <Icon className="menu-icon" icon="material-symbols-light:password" />
                <h3>Websites Accounts</h3>
                <h3>0</h3>
            </div>
            <div className="summary-card">
            <Icon className="summary-icon"  icon="quill:creditcard" />
                <h3>Credit Cards</h3>
                <h3>0</h3>
            </div>
            <div className="summary-card">
            <Icon  className="summary-icon" icon="solar:user-outline" />
                <h3>IDs</h3>
                <h3>0</h3>
            </div>
        </div>
      </div>
    </>
  );
};
export default Home;
