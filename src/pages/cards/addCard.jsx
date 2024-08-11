import "../../styles/card/addCard.css";
import InputForm from "../../components/form/inputForm";
import SelectForm from "../../components/form/selectForm";
import TextareaForm from "../../components/form/textareaForm";
import Form from "../../components/form/form";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import useAddCard from "../../hooks/cards/useAddCard";
import ButtonSubmitForm from "../../components/form/buttonSubmitForm";

const AddCard = () => {
  const { handleChange, inputs } = useHandleOnChange();
  const { handleSubmit } = useAddCard(inputs);

  return (
    <>
      <header className="grid-header">
        <h2>Add new card</h2>
      </header>

      <div className="grid-section">
        <div className="container-addcard">
          <Form onSubmit={handleSubmit}>

            <h3>Cardholder name</h3>
            <SelectForm
              name="type"
              value={inputs.type || "credit_card"}
              onChange={handleChange}
              mandatory={true}
            >
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
            </SelectForm>

            <h3>Cardholder name</h3>
            <InputForm
              name="cardholder_name"
              type="text"
              value={inputs.cardholder_name}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Expiration Date</h3>
            <InputForm
              name="expiration_date"
              type="date"
              value={inputs.expiration_date}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Cvv</h3>
            <InputForm
              name="cvv"
              type="number"
              value={inputs.cvv}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Issuer</h3>
            <InputForm
              name="issuer"
              type="text"
              value={inputs.issuer}
              onChange={handleChange}
              mandatory={true}
            />

            <h3>Commentary</h3>
            <TextareaForm name="commentary" value={inputs.commentary} onChange={handleChange} mandatory={false}/>


            <ButtonSubmitForm />
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddCard;
