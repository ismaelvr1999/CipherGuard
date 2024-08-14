import "../../styles/card/detailsCard.css";
import UnInputForm from "../../components/form/unInputForm";
import UnSelectForm from "../../components/form/unSelectForm";
import UnTextareaForm from "../../components/form/unTextareaForm";
import Form from "../../components/form/form";
import useDetailsPassport from "../../hooks/passports/useDetailsPassport";
import formatDate from "../../utils/formatDate";
import { useParams } from "react-router-dom";

const DetailsPassport = () => {
  const { passport_id } = useParams();
  const { formRef, passport, handleUpdate } = useDetailsPassport(passport_id);
  return (
    <>
      <header className="grid-header">
        <h2>{passport && passport.first_name + "/" + passport.nationality}</h2>
        <button type="button" id="button-update" onClick={handleUpdate}>
          Update
        </button>
      </header>

      <div className="grid-section">
        <div className="container-detailsCard">
          <Form refe={formRef}>
            {passport && (
              <>
                <UnInputForm
                  type="hidden"
                  name="passport_id"
                  defaultValue={passport_id}
                />
                <h3>First name</h3>
                <UnInputForm
                  name="first_name"
                  type="text"
                  defaultValue={passport.first_name}
                  mandatory={true}
                />

                <h3>Last name</h3>
                <UnInputForm
                  name="last_name"
                  type="text"
                  defaultValue={passport.last_name}
                  mandatory={true}
                />

                <h3>Passport number</h3>
                <UnInputForm
                  name="passport_number"
                  type="text"
                  defaultValue={passport.passport_number}
                  mandatory={true}
                />

                <h3>Nationality</h3>
                <UnInputForm
                  name="nationality"
                  type="text"
                  defaultValue={passport.nationality}
                  mandatory={true}
                />

                <h3>Date of birth</h3>
                <UnInputForm
                  name="date_of_birth"
                  type="date"
                  defaultValue={formatDate(passport.date_of_birth)}
                />

                <h3>Issue Date</h3>
                <UnInputForm
                  name="issue_date"
                  type="date"
                  defaultValue={formatDate(passport.issue_date)}
                  mandatory={true}
                />

                <h3>Expiration date</h3>
                <UnInputForm
                  name="expiration_date"
                  type="date"
                  defaultValue={formatDate(passport.expiration_date)}
                  mandatory={true}
                />

                <h3>Status</h3>
                <UnSelectForm
                  name="status"
                  defaultValue={passport.status || "valid"}
                  mandatory={true}
                >
                  <option value="valid">Valid</option>
                  <option value="expired">Expired</option>
                  <option value="renewed">Renewed</option>
                </UnSelectForm>

                <h3>Commentary</h3>
                <UnTextareaForm
                  name="commentary"
                  defaulValue={passport.commentary}
                  mandatory={false}
                />
              </>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default DetailsPassport;
