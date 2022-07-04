
export default function LeftSidebarLinks(props) {


    return (
      <span className="LeftSideBarLinks" onClick={()=>props.updateTitle(props.title)}>
        {props.logo}
        <h3 style={props.setStyle} >{props.title}</h3>
      </span>
    );
  }
