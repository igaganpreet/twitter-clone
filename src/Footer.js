import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import { VscBell } from "react-icons/vsc"

export default function Footer(props) {


    return (
      <footer className="Footer">
        <AiOutlineHome onClick={()=>props.updateTitle("Home")}/>
        <FiSearch onClick={()=>props.updateTitle("Explore")}/>
        <VscBell onClick={()=>props.updateTitle("Notifications")}/>
        <AiOutlineMail onClick={()=>props.updateTitle("Messages")}/>

      </footer>
    )
  }
