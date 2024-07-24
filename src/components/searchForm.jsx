import { Icon } from "@iconify/react";
import '../styles/searchForm.css'

const SearchForm = ({handleSearch,searchValue,setSearchValue})=>{
    return (
        <form className="search-container" onSubmit={handleSearch}>
        <button>
          <Icon
            className="search-icon"
            icon="material-symbols-light:search"
          />
        </button>
        <input placeholder="Search" type="search" value={searchValue || ''} onChange={(e)=> setSearchValue(e.target.value)}/>
      </form>
    );
};

export default SearchForm;