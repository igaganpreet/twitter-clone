import {FiSearch} from "react-icons/fi"
import WhatsHappening from "./WhatsHappening"


export default function SearchBar() {
    return (
        <div className="SearchBar">
          <FiSearch className="searchIcon" />
          <input placeholder="Search Twitter"></input>
        </div>
    );
  }
