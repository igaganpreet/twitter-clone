import LeftSideBarLinks from "./LeftSideBarLinks"
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faHouse, faBell, faUser, faAnglesRight, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const LinksArr=[
    {
        id:nanoid(),
        logo:<FontAwesomeIcon icon={faHouse} />,
        title:"Home"
    },
    {
        id:nanoid(),
        logo:<FontAwesomeIcon icon={faHashtag} />,
        title:"Explore"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faBell} />,
      title:"Notification"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faEnvelope} />,
      title:"Messages"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faBookmark} />,
      title:"Bookmarks"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faNoteSticky} />,
      title:"Lists"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faUser} />,
      title:"Profile"
    },
    {
      id:nanoid(),
      logo:<FontAwesomeIcon icon={faAnglesRight} />,
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
        <FontAwesomeIcon id="twitterIcon" icon={faTwitter} />
        {displayLinkList}
        <button className="tweetButtonLeftSideBar">Tweet</button>
      </section>
    );
  }
