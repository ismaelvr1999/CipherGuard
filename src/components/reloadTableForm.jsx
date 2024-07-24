import { Icon } from "@iconify/react";
import "../styles/reloadTableForm.css"

const ReloadTableForm = ({reloadTableData}) =>{
    return(
        <form className="reload-container">
        <button type="button" onClick={reloadTableData}>
          <Icon className="reload-icon" icon="bytesize:reload" />
        </button>
      </form>
    );
};

export default ReloadTableForm;