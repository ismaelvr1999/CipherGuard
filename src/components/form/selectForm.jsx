import '../../styles/form/selectForm.css';

const SelectForm = ({name,value,onChange,mandatory,children,defaultValue})=>{
    return (
    <select className="selectForm" name={name} value={value} onChange={onChange} required = {mandatory}>
        {children}
    </select>
    );
};

export default SelectForm;