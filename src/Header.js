
import {HiOutlineSparkles} from "react-icons/hi"

export default function Header(props) {
  let width = window.innerWidth

  let displayImg=(width<480) ? <img className="profilePic" src="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg"></img>:""
    return (
      <header className="Header">
        {displayImg}
        <h5>{props.title}</h5>
        <HiOutlineSparkles className="sparkleIcon" />
      </header>
    )
  }
