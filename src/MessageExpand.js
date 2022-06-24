

export default function MessageExpand(props){


    return(
        <div className="MessageExpand">
          <img className="MessageExpandPic" src={props.img}></img>
          <span className="MessageExpandInfo">
          <h5 className="profileName">{props.name}</h5>
          <p className="profileId">{props.id}</p>
          <p className="profileId">. {props.date}</p>
          </span>
          <p className="MessageExpandMsg profileId">{props.msg}</p>
        </div>
    )
}