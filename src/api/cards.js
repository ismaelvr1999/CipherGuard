import axios from "./axios";
export const addCard = async (newCard)=>{
    return await axios.post("/cards",newCard,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    });
};

export const getCards = async()=>{
    return await axios.get("/cards",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
};

export const getCard = async(card_id)=>{
    return await axios.get(`/cards/${card_id}`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
};

export const getTotalCardsByUser = async()=>{
    return await axios.get("/cards/total",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
};

export const updateCard = async (card)=>{
    return await axios.put(`/cards/${card.card_id}`,card,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
};

export const deleteCard = async (id)=>{
    return await axios.delete(`/cards/${id}`,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
};

export const searchCard = async (searchValue)=>{
    return await axios.get(`/cards`,{
        headers: {
          Authorization: localStorage.getItem("token")
        },
        params: {
          search: searchValue.trim()
      }
      });
};