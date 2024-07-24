import { Icon } from "@iconify/react";
import '../styles/deleteForm.css';
const DeleteForm = ({ handleDelete,id,inputName}) => {
  return (
    <form onSubmit={handleDelete}>
      <input name={inputName} type="hidden" defaultValue={id} />
      <button type="submit" className="btn-delete">
        <Icon className="icon-delete" icon="typcn:delete-outline" />
      </button>
    </form>
  );
};

export default DeleteForm;