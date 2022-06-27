import WhatsHappening from "./WhatsHappening"
import SearchBar from "./Searchbar";

export default function RightSidebar() {
    return (
      <div className="RightSideBar">
        <SearchBar /> 
        <WhatsHappening />
      </div>
    );
  }
