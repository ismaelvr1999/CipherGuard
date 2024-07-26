import "../../styles/websitesAccounts/addWebsiteAccount.css";
import InputForm from "../../components/form/inputForm";
import SelectForm from "../../components/form/selectForm";
import TextareaForm from "../../components/form/textareaForm";
import Form from "../../components/form/form";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import useAddwebsiteAccount from "../../hooks/websitesAccounts/useAddwebsiteAccount";

const AddWebsiteAccount = () => {
  const {handleChange,inputs} = useHandleOnChange();
  const {handleSubmit} = useAddwebsiteAccount(inputs);
  

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
