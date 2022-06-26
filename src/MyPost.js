import React from "react"
import {AiOutlineFileGif, AiOutlinePicture, AiOutlineSmile} from "react-icons/ai"
import {BiPoll} from "react-icons/bi"
import {TbCalendarStats} from "react-icons/tb"
import {IoLocationOutline} from "react-icons/io5"
import {GiEarthAmerica} from "react-icons/gi"
let subIcons=[
            <AiOutlinePicture className="postIcon" />,
            <AiOutlineFileGif className="postIcon" />,
            <BiPoll className="postIcon" />,
            <AiOutlineSmile className="postIcon" />,
            <TbCalendarStats className="postIcon" />,
            <IoLocationOutline className="postIcon" />
]

let HomeSubIcons= subIcons.map((icon)=>icon)

export default function MyPost() {
  let [isClicked,setClicked]=React.useState(false)
  let [isTyped,setTyped]=React.useState(false)
  let buttonColor= isTyped? {backgroundColor:"#1D9BF0"}:{backgroundColor: "#8ECDF8"}

  function handleChange(event){
      setTyped(()=>{
        return(
          event.target.value ? true :false
        )
      })
  }
  function handleClick(){
    setClicked(true)
  }

    return (

      <section className="MyPost">
        <div className="postTextArea">
          <img className="profilePic profileMainPic" src="https://pbs.twimg.com/profile_images/1423650543382142985/dCDFouI1_400x400.jpg" alt="profile pic"></img>
          <input className="homeTextArea" type="textarea" onChange={handleChange} onClick={handleClick} placeholder="What's happening?"></input> 
          <span className="everyoneReply" style={isClicked?{visibility:"visible"}:{visibility:"hidden"}}><GiEarthAmerica className="earthIcon" />Everyone can reply</span>
          <div className="subIcons">
            <div className="homeSubIcons">{HomeSubIcons}</div>
            <button style={buttonColor} className="tweetButtonPost">Tweet</button>
          </div>
        </div>
        
        
      </section>
    );
  }
