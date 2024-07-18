import { Icon } from "@iconify/react";
import "../../styles/websitesAccounts.css";
import { useEffect, useState } from "react";
import { getAllWebsiteAccounts,deleteWebAccount,searchWebAccount } from "../../api/websiteAccounts";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
const WebsiteAccounts = () => {
  const [websitesAccounts, setWebsitesAccounts] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const reloadTableData = async () => {
    await getAllWebsiteAccounts({
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((result) => {
        setWebsitesAccounts(result.data);
      })
      .catch((error) => {
        setWebsitesAccounts(null);
      });
  }

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
        console.log("No websiteAccounts");
      });
  }, [ navigate]);

  const handleDelete = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const page_id= formData.get("page_id");
    await deleteWebAccount(page_id)
    .then(() => {
      alert("Account deleted");
      reloadTableData();
    })
    .catch((error) => {
      console.error("Error fetching handleDelete:", error.message);
      localStorage.clear();
      navigate("/login");
    });
  }

  const handleSearch = async (e)=>{
    e.preventDefault();
    await searchWebAccount(searchValue).then((result) => {
      setWebsitesAccounts(result.data);
    })
    .catch((error) => {
      setWebsitesAccounts(null);
    });

  }

  return (
    <>
      <header className="grid-header">
        <h2>Websites Accounts</h2>

        <form className="search-container" onSubmit={handleSearch}>
          <button>
            <Icon
              className="search-icon"
              icon="material-symbols-light:search"
            />
          </button>
          <input placeholder="Search" type="search" value={searchValue || ''} onChange={(e)=> setSearchValue(e.target.value)}/>
        </form>

        <Link className="link-add" to="/website-accounts/add-new-account">
          + Add
        </Link>

        <form className="reload-container">
          <button type="button" onClick={reloadTableData}>
            <Icon className="reload-icon" icon="bytesize:reload" />
          </button>
        </form>
      </header>

      <div className="grid-section">
        <table className="table-container">
          <thead>
            <tr>
              <th>Website</th>
              <th>User name</th>
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
                    <td>{account.user_name}</td>
                    <td>{account.email}</td>
                    <td>{account.category}</td>
                    <td>{formatDate(account.creation_date)}</td>
                    <td>
                      <form onSubmit={handleDelete}>
                        <input name="page_id" type="hidden" defaultValue={account.page_id} />
                        <button type="submit" className="btn-delete">  
                        <Icon
                        className="icon-delete"
                          icon="typcn:delete-outline"
                        />
                        </button>
                      </form>

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
