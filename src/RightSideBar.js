import WhatsHappening from "./WhatsHappening"
import SearchBar from "./Searchbar";
import WhoToFollow from "./WhoToFollow"
export default function RightSidebar() {
    return (
      <div className="RightSideBar">
        <SearchBar /> 
        <WhatsHappening />
        <WhoToFollow />
      </div>
    );
  }
