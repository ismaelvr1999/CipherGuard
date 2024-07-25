import '../styles/inputForm.css';

const UnInputForm = ({name,type,mandatory,defaultValue}) => {
  return (
    <input
      className="inputForm"
      name= {name}
      type={type}
      defaultValue = {defaultValue}
      required = {mandatory || false} 
    />
  );
};

export default UnInputForm;