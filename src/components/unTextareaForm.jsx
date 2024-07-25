import "../styles/textareaForm.css";

const UnTextareaForm = ({name,mandatory,defaulValue}) =>{
    return (
        <textarea
        className="textarea-form"
        name={name}
        cols="30"
        rows="3"
        defaultValue={defaulValue}
        required = {mandatory}
      ></textarea>
    );
};

export default UnTextareaForm;