import SearchBar from "./Searchbar"
import {HiOutlineSparkles} from "react-icons/hi"
import {FiSettings} from "react-icons/fi"
import {BiDotsHorizontalRounded} from "react-icons/bi"

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
  if(props.title==="Bookmarks"){
    return(
      <header className="Header">
        {displayImg}
        <div className="HeaderBookmarks" >
          <h5 className="headerTitle">{props.title}</h5>
          <h6>@yetanotherdev_</h6>
        </div>
        <BiDotsHorizontalRounded className="profileInfoDots"/>
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
