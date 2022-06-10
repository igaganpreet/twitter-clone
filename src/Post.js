import { faWandMagicSparkles, faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFaceSmile, faCalendar} from "@fortawesome/free-regular-svg-icons";
import profilePic from "./profilePic.jpg"

let subIcons=[
            <FontAwesomeIcon className="postIcon" icon={faImage} />,
            <FontAwesomeIcon className="postIcon" icon={faSquarePollHorizontal} />,
            <FontAwesomeIcon className="postIcon" icon={faFaceSmile} />,
            <FontAwesomeIcon className="postIcon" icon={faCalendar} />
]

let HomeSubIcons= subIcons.map((icon)=>icon)

export default function Post() {
    return (
      <section className="Post">
        <div className="postHome">
          <h3 id="home">Home</h3>
          <FontAwesomeIcon id="wandIcon" icon={faWandMagicSparkles} />
        </div>
        <div className="postTextArea">
          <img id="profilePic" src={profilePic} alt="profile pic"></img>
          <input id="homeTextArea" type="textarea" placeholder="What's happening?"></input> 
          <div className="subIcons">
            <div className="homeSubIcons">{HomeSubIcons}</div>
            <button id="tweetButtonPost">Tweet</button>
          </div>
        </div>
        
        
      </section>
    );
  }
