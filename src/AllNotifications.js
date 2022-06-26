import {FaUser} from "react-icons/fa"
import {MdOutlineRepeat} from "react-icons/md"
import {BsFillHeartFill} from"react-icons/bs"

export default function AllNotifications(props) {

let icon= props.action ==="liked your tweet" ? <BsFillHeartFill className="heartIcon" /> : props.action ==="followed you" ? <FaUser className="userIcon" />: <MdOutlineRepeat className="retweetedIcon"/>
    return (
      <div className="AllNotifications">
        <div className="AllNotificationsIcon">{icon}</div>
        <span>
            <img className="profilePic" src={props.authorImg}></img>
            <p className="postAction"><b>{props.name}</b> {props.action}</p>
            <p className="tweetData">{props.tweetData}</p>
        </span>
      </div>
    )
  }
