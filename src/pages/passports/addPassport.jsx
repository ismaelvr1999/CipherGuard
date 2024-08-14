import "../../styles/card/addCard.css";
import InputForm from "../../components/form/inputForm";
import SelectForm from "../../components/form/selectForm";
import TextareaForm from "../../components/form/textareaForm";
import Form from "../../components/form/form";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import ButtonSubmitForm from "../../components/form/buttonSubmitForm";
import useAddPassport from "../../hooks/passports/useAddPassport";

const AddPassport = () => {
  const { handleChange, inputs } = useHandleOnChange();
  const { handleSubmit } = useAddPassport(inputs);

  return (
    <>
      <header className="grid-header">
        <h2>Add new Passport</h2>
      </header>

      <div className="grid-section">
        <div className="container-addcard">
          <Form onSubmit={handleSubmit}>
            <h3>First name</h3>
            <InputForm
              name="first_name"
              type="text"
              value={inputs.first_name}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Last name</h3>
            <InputForm
              name="last_name"
              type="text"
              value={inputs.last_name}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Passport number</h3>
            <InputForm
              name="passport_number"
              type="text"
              value={inputs.passport_number}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Nationality</h3>
            <InputForm
              name="nationality"
              type="text"
              value={inputs.nationality}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Date of birth</h3>
            <InputForm
              name="date_of_birth"
              type="date"
              value={inputs.date_of_birth}
              onChange={handleChange}
            />

            <h3>Issue Date</h3>
            <InputForm
              name="issue_date"
              type="date"
              value={inputs.issue_date}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Expiration date</h3>
            <InputForm
              name="expiration_date"
              type="date"
              value={inputs.expiration_date}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Status</h3>
            <SelectForm
              name="status"
              value={inputs.status || "valid"}
              onChange={handleChange}
              mandatory={true}
            >
              <option value="valid">Valid</option>
              <option value="expired">Expired</option>
              <option value="renewed">Renewed</option>
            </SelectForm>

            <h3>Commentary</h3>
            <TextareaForm name="commentary" value={inputs.commentary} onChange={handleChange} mandatory={false}/>

            <ButtonSubmitForm />
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddPassport;
