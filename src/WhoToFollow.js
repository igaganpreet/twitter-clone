import DisplayProfile from "./DisplayProfile"
import userData from "./userData"


export default function WhoToFollow() {
let data=userData.data;
let displayWhoToFollow=data.map((items)=>{
    return(
        <div className="profileInfo"> 
               <DisplayProfile 
                    image={items.img}
                    name={items.name}
                    userId={items.id}
                    key={items.id}
                />
            <button className="followButton">Follow</button>
        </div>

    )
})
  return (
    <main className="WhoToFollow">
        <h5>Who to follow</h5>    
        {displayWhoToFollow}
        <h6 className="showMore">Show more</h6>
    </main>
  )
}