import "../../styles/websitesAccounts.css";
import { useEffect, useState } from "react";
import { getAllWebsiteAccounts,deleteWebAccount,searchWebAccount } from "../../api/websiteAccounts";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";
import SearchForm from "../../components/searchForm";
import ReloadTableForm from "../../components/reloadTableForm";
import DeleteForm from "../../components/deleteForm";
import MoreLink from "../../components/moreLink";
import Table from "../../components/table";

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
      <Header title="Websites Accounts">
      <SearchForm handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>

        <Link className="link-add" to="/website-accounts/add-new-account">
          + Add
        </Link>

        <ReloadTableForm reloadTableData={reloadTableData} />
      </Header>

      <div className="grid-section">
        <Table>
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
                      <DeleteForm handleDelete={handleDelete} id={account.page_id} inputName="page_id"/>
                      <MoreLink to={"/website-accounts/" + account.page_id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default WebsiteAccounts;
