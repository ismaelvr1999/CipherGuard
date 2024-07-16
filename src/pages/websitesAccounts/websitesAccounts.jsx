import { Icon } from "@iconify/react";
import "../../styles/websitesAccounts.css";
import { useEffect, useState } from "react";
import {getAllWebsiteAccounts} from "../../api/websiteAccounts";
import { Navigate,Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
const WebsiteAccounts = () => {
  const [websitesAccounts,setWebsitesAccounts] = useState(null);

  useEffect(()=>{
    getAllWebsiteAccounts({
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((result) => {
      setWebsitesAccounts(result.data);
    })
    .catch((error) => {
      console.error("Error fetching getAllWebsiteAccounts:", error.message);
      localStorage.clear();
      return <Navigate to="/login"/>
    });
  },[setWebsitesAccounts])

  return (
    <>
      <header className="grid-header">
        <h2>Websites Accounts</h2>

        <form className="search-container">
          <button>
            <Icon
              className="search-icon"
              icon="material-symbols-light:search"
            />
          </button>
          <input placeholder="Search" type="text" />
        </form>

        <form className="add-container">
          <button>+ Add</button>
        </form>

        <form className="reload-container">
          <button>
            <Icon className="reload-icon" icon="bytesize:reload" />
          </button>
        </form>
      </header>

      <div className="grid-section">

        <table className="table-container">
          <thead>
            <tr>
              <th>Website</th>
              <th>Email</th>
              <th>Category</th>
              <th>Creation Date</th>
              <th>More </th>
            </tr>
          </thead>
          <tbody>
            {
              websitesAccounts && websitesAccounts.data.map((account)=>{
                return(
                <tr key={account.page_id}>
                    <td>{account.page_name}</td>
                    <td>{account.email}</td>
                    <td>{account.category}</td>
                    <td>{formatDate(account.creation_date)}</td>
                    <td><Link className="link-more" to="/"><Icon className="icon-more" icon="mingcute:more-4-line" /></Link></td>
                </tr>)
              })
            }

          </tbody>

        </table>

      </div>
      
    </>
  );
};

export default WebsiteAccounts;
