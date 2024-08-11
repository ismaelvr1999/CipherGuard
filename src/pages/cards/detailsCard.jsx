import "../../styles/card/detailsCard.css";
import UnInputForm from "../../components/form/unInputForm";
import UnSelectForm from "../../components/form/unSelectForm";
import UnTextareaForm from "../../components/form/unTextareaForm";
import Form from "../../components/form/form";
import useDetailsCard from "../../hooks/cards/useDetailsCard";
import formatDate from "../../utils/formatDate";
import { useParams } from "react-router-dom";

const DetailsCard = () => {
  const { card_id } = useParams();
  const { formRef, card, handleUpdate } = useDetailsCard(card_id);

  return (
    <>
      <header className="grid-header">
        <h2>{card && card.issuer + "/" + card.cardholder_name}</h2>
        <button type="button" id="button-update" onClick={handleUpdate}>
          Update
        </button>
      </header>

      <div className="grid-section">
        <div className="container-detailsCard">
          <Form refe={formRef}>
            {card && (
              <>
                <UnInputForm
                  type="hidden"
                  name="card_id"
                  defaultValue={card_id}
                />
                <h3>Type</h3>
                <UnSelectForm
                  name="type"
                  defaultValue={card.type || " "}
                  mandatory={true}
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="debit_card">Debit Card</option>
                </UnSelectForm>

                <h3>Cardholder name</h3>
                <UnInputForm
                  defaultValue={card.cardholder_name || " "}
                  type="text"
                  name="cardholder_name"
                  mandatory={true}
                />

                <h3>Expiration Date</h3>
                <UnInputForm
                  defaultValue={formatDate(card.expiration_date) || ""}
                  type="date"
                  name="expiration_date"
                  mandatory={true}
                />

                <h3>Cvv</h3>
                <UnInputForm
                  defaultValue={card.cvv|| ""}
                  type="input"
                  name="cvv"
                  mandatory={true}
                />

                <h3>Issuer</h3>
                    <UnInputForm
                    defaultValue={card.issuer|| ""}
                    type="input"
                    name="issuer"
                    mandatory={true}
                    />
                <h3>Commentary</h3>
                    <UnTextareaForm 
                        defaulValue={card.commentary || ""}
                        name ="commentary"
                        mandatory={true}
                    />
              </>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
