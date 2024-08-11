import { getCard,updateCard } from "../../api/cards";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const useDetailsCard = (card_id) =>{
    const formRef = useRef(null);
    const [card, setCard] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      getCard(card_id)
        .then((result) => {
          setCard(result.data.data);
        })
        .catch((error) => {
          console.error("Error fetching getCard:", error.message);
          localStorage.clear();
          navigate("/login");
        });
    }, [card_id,navigate]);
  
  
    const handleUpdate = async() => {
      const formData = new FormData(formRef.current);
      const card = {};
      for (const pair of formData.entries()) {
          card[pair[0]] = pair[1]
      }
      await updateCard(card)      
      .then(() => {
        alert("Card updated");
      })
      .catch((error) => {
        console.error("Error fetching updateCard:", error.message);
        localStorage.clear();
        navigate("/login");
      });
    };
  return {
    formRef,
    card,
    handleUpdate
  };
};

export default useDetailsCard;