import { useParams } from "react-router-dom";
import "../../styles/websitesAccounts/detailsWebsiteAccount.css";
import Form from "../../components/form/form";
import UnInputForm from "../../components/form/unInputForm"; 
import UnSelectForm from "../../components/form/unSelectForm";
import UnTextareaForm from "../../components/form/unTextareaForm";
import useDetailWebsiteAccount from "../../hooks/websitesAccounts/useDetailsWebsiteAccount";

const DetailsWebsiteAccount = () => {
  const { page_id } = useParams(null);
  const {formRef,websiteAccount,updateWebsiteAccount} = useDetailWebsiteAccount(page_id);
  
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
