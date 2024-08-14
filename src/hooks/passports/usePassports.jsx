import { useEffect, useState } from "react";
import { deletePassport,getPassports,searchPassport } from "../../api/passports";
import { useNavigate } from "react-router-dom";

const usePassports = () => {
    const [passports, setPassports] = useState(null);
    const [searchValue,setSearchValue] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      getPassports()
        .then((result) => {
          setPassports(result.data);
        })
        .catch((error) => {
          setPassports(null);
        });
    }, []);
  
    const reloadTableData = async () => {
      await getPassports()
      .then((result) => {
        setPassports(result.data);
      })
      .catch((error) => {
        setPassports(null);
      });
    };
  
    const handleSearch = async (e) => {
      e.preventDefault();
      await searchPassport(searchValue)
        .then((result) => {
          setPassports(result.data);
        })
        .catch((error) => {
          setPassports(null);
        });
    };
  
    const handleDelete = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const passport_id = formData.get("passport_id");
      await deletePassport(passport_id)
        .then(() => {
          alert("Passport deleted");
          reloadTableData();
        })
        .catch((error) => {
          console.error("Error fetching handleDelete card:", error.message);
          localStorage.clear();
          navigate("/login");
        });
    };
    return{
      passports,
      reloadTableData,
      handleDelete,
      searchValue,
      setSearchValue,
      handleSearch
    }
  };
  
  export default usePassports;