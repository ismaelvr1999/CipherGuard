import { useEffect, useState } from "react";
import { deleteCard, getCards, searchCard } from "../../api/cards";
import { useNavigate } from "react-router-dom";
const useCards = () => {
  const [cards, setCards] = useState(null);
  const [searchValue,setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getCards()
      .then((result) => {
        setCards(result.data);
      })
      .catch((error) => {
        setCards(null);
      });
  }, []);

  const reloadTableData = async () => {
    await getCards()
    .then((result) => {
      setCards(result.data);
    })
    .catch((error) => {
      setCards(null);
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchCard(searchValue)
      .then((result) => {
        setCards(result.data);
      })
      .catch((error) => {
        setCards(null);
      });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const card_id = formData.get("card_id");
    await deleteCard(card_id)
      .then(() => {
        alert("Card deleted");
        reloadTableData();
      })
      .catch((error) => {
        console.error("Error fetching handleDelete card:", error.message);
        localStorage.clear();
        navigate("/login");
      });
  };
  return{
    cards,
    reloadTableData,
    handleDelete,
    searchValue,
    setSearchValue,
    handleSearch
  }
};

export default useCards;