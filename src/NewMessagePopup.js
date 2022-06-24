import {MdClose} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import {MdPeopleOutline} from "react-icons/md"
import DisplayProfile from "./DisplayProfile"
import userData from "./userData"

export default function NewMessagePopup(props) {

const data=userData.data
let users=data.map((user)=>{
  return(
    <div className="popup-displayProfile">
      <DisplayProfile 
        image={user.img}
        name={user.name}
        userId={user.id}
      />
    </div>
  )
})



  return (
    <div className="NewMessagePopup">
      <div className="popupBox">
        <div className="popup-top">
          <div onClick={props.popUpState}><MdClose className="closeIcon" /></div>
          <h5>New Message</h5>
          <button>Next</button>
        </div>
        <div className="popup-search">
          <FiSearch className="popup-searchIcon" />
          <input placeholder="Search people"></input>
        </div>
        <div className="popup-group">
          <MdPeopleOutline className="groupIcon"/>
          <h6>Create a group</h6>
        </div>
        <div className="popupUsers">
          {users}
        </div>
        
      </div>
    </div>
  );
}

