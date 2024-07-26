import '../../styles/form/inputForm.css';

const InputForm = ({name,type,value,onChange,mandatory,defaultValue}) => {
  return (
    <input
      className="inputForm"
      name= {name}
      type={type }
      value={value || ''}
      onChange= {onChange}
      required = {mandatory || false} 
    />
  );
};

export default InputForm;
