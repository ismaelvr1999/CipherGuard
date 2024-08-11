import { useNavigate } from "react-router-dom";
import  {addCard} from "../../api/cards"

const useAddCard = (inputs)=>{
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const type = inputs.type || "credit_card";
      const newCard = {...inputs,type:type};
      await addCard(newCard)
      .then(()=>{
        alert("Card added");
        navigate("/cards")
      })
      .catch(error => console.log(error.message))
    };

    return{
        handleSubmit
    }
}

export default useAddCard;