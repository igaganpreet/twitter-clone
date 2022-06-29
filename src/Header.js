import SearchBar from "./Searchbar"
import {HiOutlineSparkles} from "react-icons/hi"
import {FiSettings} from "react-icons/fi"


export default function Header(props) {
  let width = window.innerWidth
  let displayImg=(width<480) ? <img className="profilePic headerImg" src="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg"></img>:""
  let icon= (props.title==="Home")?<HiOutlineSparkles className="sparkleIcon" />:<FiSettings className="settingsIcon" />
  if(props.title==="Explore"){
    return(
      <header className="Header">
        {displayImg}
        <SearchBar />
        {icon}
      </header>
    )
  }  
    else{
      return (
        <header className="Header">
          {displayImg}
          <h5 className="headerTitle">{props.title}</h5>
          {icon}
        </header>
      )
    }
  
  }
