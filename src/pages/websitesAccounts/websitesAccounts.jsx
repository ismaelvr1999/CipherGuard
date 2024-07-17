import { Icon } from "@iconify/react";
import "../../styles/websitesAccounts.css";
import { useEffect, useState } from "react";
import { getAllWebsiteAccounts } from "../../api/websiteAccounts";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
const WebsiteAccounts = () => {
  const [websitesAccounts, setWebsitesAccounts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllWebsiteAccounts({
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((result) => {
        setWebsitesAccounts(result.data);
      })
      .catch((error) => {
        console.error("Error fetching getAllWebsiteAccounts:", error.message);
        localStorage.clear();
        navigate("/login");
      });
  }, [setWebsitesAccounts, navigate]);

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
        <Link className="link-add" to="/website-accounts/add-new-account">
          + Add
        </Link>
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
            {websitesAccounts &&
              websitesAccounts.data.map((account) => {
                return (
                  <tr key={account.page_id}>
                    <td>{account.page_name}</td>
                    <td>{account.email}</td>
                    <td>{account.category}</td>
                    <td>{formatDate(account.creation_date)}</td>
                    <td>
                      <Link
                        className="link-more"
                        to={"/website-accounts/" + account.page_id}
                      >
                        <Icon
                          className="icon-more"
                          icon="mingcute:more-4-line"
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WebsiteAccounts;
