import LeftSideBarLinks from "./LeftSideBarLinks"
import DisplayProfile from "./DisplayProfile"
import { nanoid } from "nanoid"
import { FaTwitter,FaHashtag } from "react-icons/fa"
import {AiOutlineHome, AiOutlineUser, AiFillHome} from "react-icons/ai"
import {BiHash, BiDotsHorizontalRounded} from "react-icons/bi"
import {VscBell} from "react-icons/vsc"
import {BsBellFill, BsFillBookmarkFill} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {BsBookmark} from "react-icons/bs"
import {RiFileList2Line, RiFileList2Fill, RiUser3Fill} from "react-icons/ri"
import {HiOutlineDotsCircleHorizontal, HiMail} from "react-icons/hi"
import React from "react"




export default function LeftSidebar(props) {

  const LinksArr=
    [{
        id:nanoid(),
        logoOutline:<AiOutlineHome />,
        logoFill:<AiFillHome />,
        title:"Home"
    },
    {
        id:nanoid(),
        logoOutline:<BiHash />,
        logoFill:<FaHashtag />,
        title:"Explore"
    },
    {
      id:nanoid(),
      logoOutline:<VscBell />,
      logoFill:<BsBellFill />,
      title:"Notifications"
    },
    {
      id:nanoid(),
      logoOutline:<FiMail />,
      logoFill:<HiMail />,
      title:"Messages"
    },
    {
      id:nanoid(),
      logoOutline:<BsBookmark />,
      logoFill:<BsFillBookmarkFill />,
      title:"Bookmarks"
    },
    {
      id:nanoid(),
      logoOutline:<RiFileList2Line />,
      logoFill:<RiFileList2Fill />,
      title:"Lists"
    },
    {
      id:nanoid(),
      logoOutline:<AiOutlineUser />,
      logoFill:<RiUser3Fill />,
      title:"Profile"
    },
    {
      id:nanoid(),
      logoOutline:<HiOutlineDotsCircleHorizontal />,
      logoFill:<HiOutlineDotsCircleHorizontal />,
      title:"More"
    }
  ]

let displayLinkList=LinksArr.map((item)=>{
  if(props.title===item.title){
    return (
      <LeftSideBarLinks title={item.title} 
            logo={item.logoFill} 
            isSelected={item.isSelected}
            key={item.id}
            updateTitle={props.updateTitle}
            setStyle={{"font-weight": "600"}} />
)
  }
  else{
    return (
      <LeftSideBarLinks title={item.title} 
            logo={item.logoOutline} 
            isSelected={item.isSelected}
            key={item.id}
            updateTitle={props.updateTitle}
            setStyle={{"font-weight": "300"}} />
)
  }
  
} 
)

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
