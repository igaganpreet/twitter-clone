

export default function DisplayProfile(props){
    return(
        <div className="displayProfile">
          <img className="profilePic profileInfoPic" src={props.image}></img>
          <div className="displayProfileInfo">
            <h6 className="profileName">{props.name}</h6>
            <p className="profileId">{props.userId}</p>
          </div>
        </div>
    )
}