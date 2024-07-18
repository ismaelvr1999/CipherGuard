import { useParams } from "react-router-dom";
import { getWebsiteAccount,updateWebAccount } from "../../api/websiteAccounts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../../styles/detailsWebsiteAccount.css"
const DetailsWebsiteAccount = () => {
  const formRef = useRef(null);
  const { page_id } = useParams(null);
  const [websiteAccount, setWebsiteAccount] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getWebsiteAccount(page_id)
      .then((result) => {
        setWebsiteAccount(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching getAllWebsiteAccounts:", error.message);
        localStorage.clear();
        navigate("/login");
      });
  }, [ page_id, navigate]);


  const updateWebsiteAccount = async() => {
    const formData = new FormData(formRef.current);
    const updateWebsiteAccount = {};
    for (const pair of formData.entries()) {
        updateWebsiteAccount[pair[0]] = pair[1]
    }
    await updateWebAccount(updateWebsiteAccount)      
    .then(() => {
      alert("WebsiteAccount updated");
    })
    .catch((error) => {
      console.error("Error fetching updateWebsiteAccount:", error.message);
      localStorage.clear();
      navigate("/login");
    });

    console.log(updateWebsiteAccount);


  };

  return (
    <>
      <header className="grid-header">
        <h2>
          {websiteAccount &&
            websiteAccount.page_name + "/" + websiteAccount.user_name}
        </h2>
        <button type="button" id="button-update" onClick={updateWebsiteAccount}>Update</button>
      </header>

      <div className="grid-section">
        <div className="form-container">
          <form ref={formRef} className="form-addwebsite">
            <h3>Website name</h3>
            {websiteAccount && (
              <>
                <input type="hidden" name="page_id" defaultValue={page_id} />
                <input
                  name="page_name"
                  type="text"
                  defaultValue={websiteAccount.page_name || ""}
                  required
                />
                <h3>Email</h3>
                <input
                  type="email"
                  name="email"
                  defaultValue={websiteAccount.email || ""}
                  required
                />
                <h3>User name</h3>
                <input
                  type="text"
                  name="user_name"
                  defaultValue={websiteAccount.user_name || ""}
                />
                <h3>Password</h3>
                <input
                  type="text"
                  name="password"
                  defaultValue={websiteAccount.password || ""}
                  required
                />
                <h3>Category</h3>
                <select
                  name="category"
                  defaultValue={websiteAccount.category || " "}
                  required
                >
                  <option defaultValue="social_media">social_media</option>
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
                  defaultValue={websiteAccount.commentary || ""}
                  required
                ></textarea>
                
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsWebsiteAccount;
