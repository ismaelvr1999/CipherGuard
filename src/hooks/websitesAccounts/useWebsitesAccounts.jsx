import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllWebsiteAccounts,
  deleteWebAccount,
  searchWebAccount,
} from "../../api/websiteAccounts";

const useWebsitesAccounts = () => {
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
  };

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
  }, [navigate]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const page_id = formData.get("page_id");
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
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchWebAccount(searchValue)
      .then((result) => {
        setWebsitesAccounts(result.data);
      })
      .catch((error) => {
        setWebsitesAccounts(null);
      });
  };

  return {
    websitesAccounts,
    reloadTableData,
    handleDelete,
    handleSearch,
    searchValue,
    setSearchValue
  };
};

export default useWebsitesAccounts;