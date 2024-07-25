import "../styles/textareaForm.css";

const TextareaForm = ({name,value,onChange,mandatory}) =>{
    return (
        <textarea
        className="textarea-form"
        name={name}
        cols="30"
        rows="3"
        value={value}
        onChange={onChange}
        required = {mandatory}
      ></textarea>
    );
};

export default TextareaForm;