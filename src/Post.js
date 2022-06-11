import profilePic from "./profilePic.jpg"
import {AiOutlineFileGif, AiOutlinePicture, AiOutlineSmile} from "react-icons/ai"
import {BiPoll} from "react-icons/bi"
import {TbCalendarStats} from "react-icons/tb"
import {IoLocationOutline} from "react-icons/io5"
import {HiOutlineSparkles} from "react-icons/hi"
let subIcons=[
            <AiOutlinePicture className="postIcon" />,
            <AiOutlineFileGif className="postIcon" />,
            <BiPoll className="postIcon" />,
            <AiOutlineSmile className="postIcon" />,
            <TbCalendarStats className="postIcon" />,
            <IoLocationOutline className="postIcon" />
]

let HomeSubIcons= subIcons.map((icon)=>icon)

export default function Post() {
    return (

      <section className="Post">
        <div className="postHome">
          
          <h3 id="home">Home</h3>
          <HiOutlineSparkles id="sparkleIcon" />
        </div>
        <div className="postTextArea">
          <img className="profilePic profileMainPic" src={profilePic} alt="profile pic"></img>
          <input id="homeTextArea" type="textarea" placeholder="What's happening?"></input> 
          <div className="subIcons">
            <div className="homeSubIcons">{HomeSubIcons}</div>
            <button id="tweetButtonPost">Tweet</button>
          </div>
        </div>
        
        
      </section>
    );
  }
