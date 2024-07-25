import '../styles/form.css';

const Form = ({children,onSubmit,refe})=>{
    return(
        <form ref={refe} className="form-container" onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;

