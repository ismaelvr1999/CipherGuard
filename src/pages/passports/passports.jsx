import Header from "../layout/header";
import Table from "../../components/table";
import formatDate from "../../utils/formatDate";
import DeleteForm from "../../components/buttons/deleteForm";
import SearchForm from "../../components/buttons/searchForm";
import ReloadTableForm from "../../components/buttons/reloadTableForm";
import MoreLink from "../../components/buttons/moreLink";
import usePassports from "../../hooks/passports/usePassports";
import { Link } from "react-router-dom";

const Passports = () => {
  const {handleSearch,searchValue,setSearchValue,reloadTableData,passports,handleDelete} = usePassports()
  return (
    <>
      <Header title="Passports">
        <SearchForm handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Link className="link-add" to="/passports/add-new-passport">
          + Add
        </Link>

        <ReloadTableForm reloadTableData={reloadTableData} />
      </Header>

      <div className="grid-section">
      <Table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Passport number</th>
              <th>nationality</th>
              <th>Date of birth</th>
              <th>Issue Date</th>
              <th>Expiration Date</th>
              <th>Status</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {passports && passports.data.map((passport)=>{
              return(
                <tr key={passport.passport_id}>
                  <td>{passport.first_name}</td>
                  <td>{passport.last_name}</td>
                  <td>{passport.passport_number}</td>
                  <td>{passport.nationality}</td>
                  <td>{formatDate(passport.date_of_birth)}</td>
                  <td>{formatDate(passport.issue_date)}</td>
                  <td>{formatDate(passport.expiration_date)}</td>
                  <td>{passport.status}</td>
                  <td>                      
                    <DeleteForm handleDelete={handleDelete} id={passport.passport_id} inputName="passport_id"/>
                    <MoreLink to={"/passports/" + passport.passport_id} />
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

export default Passports;