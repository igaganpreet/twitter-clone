import LeftSideBarLinks from "./LeftSideBarLinks"
import profilePic from "./profilePic.jpg"
import { nanoid } from "nanoid"
import { FaTwitter } from "react-icons/fa"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiHash, BiDotsHorizontalRounded} from "react-icons/bi"
import {VscBell} from "react-icons/vsc"
import {FiMail} from "react-icons/fi"
import {BsBookmark} from "react-icons/bs"
import {RiFileList2Line} from "react-icons/ri"
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi"



const LinksArr=[
    {
        id:nanoid(),
        logo:<AiOutlineHome />,
        title:"Home"
    },
    {
        id:nanoid(),
        logo:<BiHash />,
        title:"Explore"
    },
    {
      id:nanoid(),
      logo:<VscBell />,
      title:"Notification"
    },
    {
      id:nanoid(),
      logo:<FiMail />,
      title:"Messages"
    },
    {
      id:nanoid(),
      logo:<BsBookmark />,
      title:"Bookmarks"
    },
    {
      id:nanoid(),
      logo:<RiFileList2Line />,
      title:"Lists"
    },
    {
      id:nanoid(),
      logo:<AiOutlineUser />,
      title:"Profile"
    },
    {
      id:nanoid(),
      logo:<HiOutlineDotsCircleHorizontal />,
      title:"More"
    }
    
]

export default function LeftSidebar() {
  let displayLinkList=LinksArr.map(
      item=> 
            <LeftSideBarLinks title={item.title} 
            logo={item.logo} 
            key={item.id} />
            )
    return (
      <section className="LeftSideBar">
        <FaTwitter id="twitterIcon" />
        {displayLinkList}
        <button className="tweetButtonLeftSideBar">Tweet</button>
        <div className="profileInfo"> 
          <img className="profilePic profileInfoPic" src="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg" alt="profile pic"></img>
          <div className="displayProfileInfo">
            <h5 id="profileName">Baljeet Singh</h5>
            <p id="profileId">@yetanotherdev_</p>
          </div>
          <BiDotsHorizontalRounded className="profileInfoDots"/>
        </div>
      </section>
    );
  }
