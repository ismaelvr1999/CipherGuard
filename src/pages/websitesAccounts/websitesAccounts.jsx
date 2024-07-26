import "../../styles/websitesAccounts/addWebsiteAccount.css";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import Header from "../layout/header";
import SearchForm from "../../components/buttons/searchForm";
import ReloadTableForm from "../../components/buttons/reloadTableForm";
import DeleteForm from "../../components/buttons/deleteForm";
import MoreLink from "../../components/buttons/moreLink";
import Table from "../../components/table";
import useWebsitesAccounts from "../../hooks/websitesAccounts/useWebsitesAccounts";

const WebsiteAccounts = () => {
  const {websitesAccounts,
    reloadTableData,
    handleDelete,
    handleSearch,
    searchValue,
    setSearchValue} = useWebsitesAccounts();

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
