import { useState } from "react";
import "../../styles/addWebsiteAccount.css";
import { addWebsiteAccount } from "../../api/websiteAccounts";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/inputForm";
import SelectForm from "../../components/selectForm";
import TextareaForm from "../../components/textareaForm";
import Form from "../../components/form";

const AddWebsiteAccount = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = inputs.category || "social_media";
    const newWebsiteAccount = {...inputs,category:category};
    const headers ={headers: {Authorization: localStorage.getItem("token")}};
    await addWebsiteAccount(newWebsiteAccount,headers)
    .then(()=>{
      alert("Account added");
      navigate("/website-accounts")
    })
    .catch(error => console.log(error.message))
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <header className="grid-header">
        <h2>Add new website account</h2>
      </header>

      <div className="grid-section">
        <div className="container-addwebsite">
          <Form onSubmit={handleSubmit}>
          <h3>Website name</h3>
            <InputForm name="page_name" type="text" value={inputs.page_name} onChange= {handleChange} mandatory={true}/>

            <h3>Email</h3>
            <InputForm name="email"  type="email" value={inputs.email} onChange={handleChange} mandatory={true}/>

            <h3>User name</h3>
            <InputForm name="user_name" type="text" value={inputs.user_name} onChange={handleChange} mandatory={false}/>

            <h3>Password</h3>
            <InputForm name="password" type="password" value={inputs.password} onChange={handleChange} mandatory={true}/>

            <h3>Category</h3>
            <SelectForm name="category" value={inputs.category || "social_media"} onChange={handleChange} mandatory={true}>
                <option value="social_media" >social_media</option>
                <option value="email">email</option>
                <option value="online_shopping">online_shopping</option>
                <option value="streaming_platform">streaming_platform</option>
                <option value="other">other</option>
            </SelectForm>

            <h3>Commentary</h3>
            <TextareaForm name="commentary" value={inputs.commentary} onChange={handleChange} mandatory={false}/>
            
            <button className="btn-addwebsite" type="submit">Add</button>

          </Form>
          
        </div>
      </div>
    </>
  );
};

export default AddWebsiteAccount;
