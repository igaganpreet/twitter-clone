import DisplayProfile from "./DisplayProfile"
import userData from "./userData"


export default function WhoToFollow() {
let data=userData.data;
let displayWhoToFollow=data.map((items)=>{
    return(
        <DisplayProfile 
            image={items.img}
            name={items.name}
            userId={items.id}
            key={items.id}
            />
    )
})
  return (
    <main className="WhoToFollow">
        {displayWhoToFollow}
        <h6 className="showMore">Show more</h6>
    </main>
  )
}
{/* <div className="displayProfile">
          <img className="profilePic profileInfoPic" src={props.image}></img>
          <div className="displayProfileInfo">
            <h5 className="profileName">{props.name}</h5>
            <p className="profileId">{props.userId}</p>
          </div>
        </div> */}