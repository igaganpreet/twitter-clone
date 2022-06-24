import LeftSideBarLinks from "./LeftSideBarLinks"
import DisplayProfile from "./DisplayProfile"
import { nanoid } from "nanoid"
import { FaTwitter } from "react-icons/fa"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiHash, BiDotsHorizontalRounded} from "react-icons/bi"
import {VscBell} from "react-icons/vsc"
import {FiMail} from "react-icons/fi"
import {BsBookmark} from "react-icons/bs"
import {RiFileList2Line} from "react-icons/ri"
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi"
import React from "react"




export default function LeftSidebar() {

  const [LinksArr, setLinksArr]=React.useState([
    {
        id:nanoid(),
        logo:<AiOutlineHome />,
        title:"Home",
        isSelected:true
    },
    {
        id:nanoid(),
        logo:<BiHash />,
        title:"Explore",
        isSelected:false
    },
    {
      id:nanoid(),
      logo:<VscBell />,
      title:"Notification",
      isSelected:false
    },
    {
      id:nanoid(),
      logo:<FiMail />,
      title:"Messages",
      isSelected:false
    },
    {
      id:nanoid(),
      logo:<BsBookmark />,
      title:"Bookmarks",
      isSelected:false
    },
    {
      id:nanoid(),
      logo:<RiFileList2Line />,
      title:"Lists",
      isSelected:false
    },
    {
      id:nanoid(),
      logo:<AiOutlineUser />,
      title:"Profile",
      isSelected:false
    },
    {
      id:nanoid(),
      logo:<HiOutlineDotsCircleHorizontal />,
      title:"More",
      isSelected:false
    }
    
  ])

const [displayLinkList,setDisplayLinkList]=React.useState(setLinkEl(LinksArr))

    function setLinkEl(arr){
     return(arr.map(
        item=> 
              <LeftSideBarLinks title={item.title} 
              logo={item.logo} 
              isSelected={item.isSelected}
              key={item.id}
              clicked={linkClicked} />
              )
     )
    }
 function linkClicked()
{
  console.log("clicked")
} 
    return (
      <section className="LeftSideBar">
        <span><FaTwitter className="twitterIcon" /></span>
        {displayLinkList}
        <button className="tweetButtonLeftSideBar">Tweet</button>
        <div className="profileInfo"> 
          <DisplayProfile 
            image="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg"
            name="Baljeet Singh"
            userId="@yetanotherdev_"
          />
          <BiDotsHorizontalRounded className="profileInfoDots"/>
        </div>
      </section>
    );
  }
