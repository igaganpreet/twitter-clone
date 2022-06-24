import {RiMailAddLine} from "react-icons/ri"
import {BsChevronDoubleUp, BsChevronDoubleDown} from "react-icons/bs"
import NewMessagePopup from "./NewMessagePopup";
import React from "react"
import MessageExpand from "./MessageExpand";
import MessageData from "./MessageData";

export default function Messages() {
let data=MessageData.data

 let display=data.map((item)=>{
      return(
      <MessageExpand 
            img={item.img}
            name={item.name}
            id={item.id}
            date={item.date}
            msg={item.msg}
          />
      )
  })


const [viewPopUp,setPopUp]=React.useState(false)
const [expandMessage,setExpandMessage]=React.useState(false)
function togglePopUp(){
  console.log("clicked")
  setPopUp((prev)=>!prev)
}
function toggleExpandMessage(){
  console.log("clicked")
  setExpandMessage((prev)=>!prev)
}
let MessageHeight=expandMessage?{height:"80vh", overflowY:"scroll"}:{height:"9vh",overflowY:"hidden"}
let ArrowIcon= expandMessage?
                <BsChevronDoubleDown className="messageIcon messageExpandIcon" onClick={toggleExpandMessage} /> :
                <BsChevronDoubleUp className="messageIcon messageExpandIcon" onClick={toggleExpandMessage} />


  return (
    <div className="Messages" style={MessageHeight}>
      <div className="messageInner">
        {viewPopUp && <NewMessagePopup popUpState={togglePopUp} />}
        <p>Messages</p>
        <span className="messageIconLeft">
          <RiMailAddLine className="messageIcon newMessageIcon" onClick={togglePopUp} />
          {ArrowIcon}
        </span>
      </div>
      {expandMessage && display} 
    </div>
  );
}

