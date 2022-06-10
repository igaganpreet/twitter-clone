
export default function LeftSidebarLinks(props) {
    return (
      <div className="LeftSideBarLinks">
        {props.logo}
        <h3>{props.title}</h3>
      </div>
    );
  }
