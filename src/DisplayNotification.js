import AllNotifications from "./AllNotifications"
// import MentionNotification from "./MentionNotifications"
import NotificationData from "./NotificationData"



export default function DisplayNotification() {
let info=NotificationData.data
let AllNotificationData=info.map((data)=>{
    return(
        <AllNotifications 
            key={data.id}
            authorImg={data.authorImg}
            name={data.authorName}
            action={data.action}
            tweetData={data.tweetData}
        />
    )
})

function addActiveClass(event){
  console.log(event.target.classList)
  // event.target.classList.add("active").siblings.removeClass('active');
}

    return (
      <main className="DisplayNotification">
        <div className="notificationType">
          <h6><a className="active all" onClick={addActiveClass}>All</a></h6>
          <h6><a onClick={addActiveClass}>Mentions</a></h6>
        </div>
        {AllNotificationData}
        {/* <MentionNotification /> */}
      </main>
    )
  }
