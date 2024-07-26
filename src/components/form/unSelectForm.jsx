import '../../styles/form/selectForm.css';

const UnSelectForm = ({name,mandatory,children,defaultValue})=>{
    return (
    <select className="selectForm" name={name} defaultValue={defaultValue} required = {mandatory}>
        {children}
    </select>
    );
};

export default UnSelectForm;