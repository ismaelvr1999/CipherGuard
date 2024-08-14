import { useNavigate } from "react-router-dom";
import { addPassport } from "../../api/passports";

const useAddPassport = (inputs)=>{
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const type = inputs.status || "valid";
      const newPassport = {...inputs,status:type};
      await addPassport(newPassport)
      .then(()=>{
        alert("Passport added");
        navigate("/passports")
      })
      .catch(error => console.log(error.message))
    };

    return{
        handleSubmit
    }
}

export default useAddPassport;