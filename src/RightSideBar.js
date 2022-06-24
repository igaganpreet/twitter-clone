import {FiSearch} from "react-icons/fi"
import WhatsHappening from "./WhatsHappening"


export default function RightSidebar() {
    return (
      <div className="RightSideBar">
        <div className="search">
          <FiSearch className="searchIcon" />
          <input placeholder="Search Twitter"></input>
        </div>
        <WhatsHappening />
      </div>
    );
  }
