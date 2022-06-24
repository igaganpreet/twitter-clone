// import { FaTwitter } from "react-icons/fa"
import {HiOutlineSparkles} from "react-icons/hi"

export default function Header(props) {


    return (
      <header className="Header">
        <img className="profilePic" src="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg"></img>
        <h5>{props.title}</h5>
        <HiOutlineSparkles className="sparkleIcon" />
      </header>
    )
  }
