import WhatsHappening from "./WhatsHappening"
import SearchBar from "./Searchbar";
import WhoToFollow from "./WhoToFollow"


export default function RightSidebar(props) {
    return (
      <div className="RightSideBar">
        <SearchBar /> 
        {props.title==="Explore" ? "" :<WhatsHappening />}
        <WhoToFollow />
        <footer className="rightsidebarFooter">
          <p>
            <a>Terms of Service </a>
            <a>Privacy Policy </a>
            <a>Cookie Policy </a>
            <a>Accessibility </a>
            <a>Ads info </a>
            <a>More ... </a>
            <br></br>
            <a>© 2022 Twitter-Clone </a>
          </p>
      </footer>
      </div>
      
    );
  }
