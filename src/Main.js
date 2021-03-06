import MyPost from "./MyPost";
import DisplayUserPosts from "./DisplayUserPosts"
import postData from "./postData";


export default function Main(props) {
  const data=postData.data
  const display=data.map(data=>{
    return (
      <DisplayUserPosts 
            key={data.id}
            authorImg={data.authorImg}
            authorName={data.authorName}
            authorProfile={data.authorProfile}
            postTime={data.PostTime}
            postContent={data.postContent} 
            commentCount={data.commentCount}
            retweetCount={data.retweetCount}
            likeCount={data.likeCount}
            imageUrl={data.imageUrl} />
    )
})
let width = window.innerWidth;
if(width>480){
  return (
    <main className="Main">
      <MyPost />
      {display}
    </main>
  )
}
else{
  return (
    <main className="Main">
      {display}
    </main>
  )
}
}
