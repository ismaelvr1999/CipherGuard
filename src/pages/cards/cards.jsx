import useCards from "../../hooks/cards/useCards";
import Header from "../layout/header";
import Table from "../../components/table";
import formatDate from "../../utils/formatDate";
import DeleteForm from "../../components/buttons/deleteForm";
import SearchForm from "../../components/buttons/searchForm";
import ReloadTableForm from "../../components/buttons/reloadTableForm";
import MoreLink from "../../components/buttons/moreLink";
import { Link } from "react-router-dom";

const Cards = () => {
  const {cards,handleDelete,reloadTableData,handleSearch,searchValue,setSearchValue} = useCards();

  return (
    <>
      <Header title="Cards">
      <SearchForm handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Link className="link-add" to="/cards/add-new-card">
          + Add
        </Link>

        <ReloadTableForm reloadTableData={reloadTableData} />
      </Header>

      <div className="grid-section">
        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Cardholder name</th>
              <th>Expiration Date</th>
              <th>Issuer</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {cards && cards.data.map((card)=>{
              return(
                <tr key={card.card_id}>
                  <td>{card.type}</td>
                  <td>{card.cardholder_name}</td>
                  <td>{formatDate(card.expiration_date)}</td>
                  <td>{card.issuer}</td>
                  <td>                      
                    <DeleteForm handleDelete={handleDelete} id={card.card_id} inputName="card_id"/>
                    <MoreLink to={"/cards/" + card.card_id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Cards;