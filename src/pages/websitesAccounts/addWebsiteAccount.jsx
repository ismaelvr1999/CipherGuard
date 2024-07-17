import { useState } from "react";
import "../../styles/addWebsiteAccount.css";
import { addWebsiteAccount } from "../../api/websiteAccounts";
import { useNavigate } from "react-router-dom";

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
        <div className="form-container">
          <form className="form-addwebsite" onSubmit={handleSubmit}>
            <h3>Website name</h3>
            <input
              name="page_name"
              type="text"
              value={inputs.page_name || ""}
              onChange={handleChange}
              required
            />
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              required
            />
            <h3>User name</h3>
            <input
              type="text"
              name="user_name"
              value={inputs.user_name || ""}
              onChange={handleChange}
              required
            />
            <h3>Password</h3>
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              required
            />
            <h3>Category</h3>
            <select name="category" value={inputs.category || "social_media"} onChange={handleChange} required>
                <option value="social_media" >social_media</option>
                <option value="email">email</option>
                <option value="online_shopping">online_shopping</option>
                <option value="streaming_platform">streaming_platform</option>
                <option value="other">other</option>
            </select>
            <h3>Commentary</h3>
            <textarea
              name="commentary"
              cols="30"
              rows="3"
              value={inputs.commentary || ""}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWebsiteAccount;
