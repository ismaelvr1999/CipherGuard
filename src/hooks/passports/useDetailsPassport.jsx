import {getPassport,updatePassport} from "../../api/passports";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const useDetailsPassport = (passport_id) =>{
    const formRef = useRef(null);
    const [passport, setPassport] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      getPassport(passport_id)
        .then((result) => {
          setPassport(result.data.data);
        })
        .catch((error) => {
          console.error("Error fetching getPassport:", error.message);
          localStorage.clear();
          navigate("/login");
        });
    }, [passport_id,navigate]);
  
  
    const handleUpdate = async() => {
      const formData = new FormData(formRef.current);
      const passport = {};
      for (const pair of formData.entries()) {
        passport[pair[0]] = pair[1]
      }
      await updatePassport(passport)      
      .then(() => {
        alert("Passport updated");
      })
      .catch((error) => {
        console.error("Error fetching updatePassport:", error.message);
        localStorage.clear();
        navigate("/login");
      });
    };
  return {
    formRef,
    passport,
    handleUpdate
  };
};

export default useDetailsPassport;