
export default function LeftSidebarLinks(props) {

  
  let styles=props.isSelected?{fontWeight:"600"}:{fontWeight:"300"}

    return (
      <span className="LeftSideBarLinks" onClick={()=>props.updateTitle(props.title)}>
        {props.logo}
        <h3 style={styles} >{props.title}</h3>
      </span>
    );
  }
