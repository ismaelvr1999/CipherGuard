import { useParams } from "react-router-dom";
import { getWebsiteAccount,updateWebAccount } from "../../api/websiteAccounts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../../styles/detailsWebsiteAccount.css";
import Form from "../../components/form";
import UnInputForm from "../../components/unInputForm"; 
import UnSelectForm from "../../components/unSelectForm";
import UnTextareaForm from "../../components/unTextareaForm";


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
  }, [page_id,navigate]);


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
        <div className="container-detailswebsiteaccount">
          <Form refe={formRef}>
          
            {websiteAccount && (
              <>
                <UnInputForm type="hidden" name="page_id" defaultValue={page_id}/>
                <h3>Website name</h3>
                <UnInputForm type="text" name="page_name" defaultValue={websiteAccount.page_name || ""} mandatory={true}/>

                <h3>Email</h3>
                <UnInputForm type="email" name="email" defaultValue={websiteAccount.email || ""}  mandatory={true}/>

                <h3>User name</h3>
                <UnInputForm type="text" name="user_name" defaultValue={websiteAccount.user_name || ""} />

                <h3>Password</h3>
                <UnInputForm type="text" name="password" defaultValue={websiteAccount.password || ""} mandatory={true} />

                <h3>Category</h3>
                <UnSelectForm name="category" defaultValue={websiteAccount.category || " "} mandatory={true}>
                  <option defaultValue="social_media">social_media</option>
                  <option value="email">email</option>
                  <option value="online_shopping">online_shopping</option>
                  <option value="streaming_platform">streaming_platform</option>
                  <option value="other">other</option>
                </UnSelectForm>

                <h3>Commentary</h3>
                <UnTextareaForm name="commentary" mandatory= {true} defaulValue={websiteAccount.commentary || ""}  />

              </>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default DetailsWebsiteAccount;
