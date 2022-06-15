import React from "react"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {FaRegComment,FaRegHeart,FaHeart } from "react-icons/fa"
import {FiShare} from "react-icons/fi"
import {MdOutlineRepeat} from "react-icons/md"
export default function DisplayUserPosts(props) {
      

let [like,setLikeCount]=React.useState({
                                        likeCount:props.likeCount,
                                        isLiked:false
                                      })
let [retweet,setRetweetCount]=React.useState({
                                        retweetCount:props.retweetCount,
                                        isRetweeted:false
                                      })

let postImage=<img className="postImage" src={props.imageUrl}></img>
let commentCount=props.commentCount
let likeStyle=like.isLiked ? {color:"#F8519E"}:{color:"#50575c"}
let retweetStyle=retweet.isRetweeted ? {color:"#1EC18B"}:{color:"#50575c"}


function handleLiked(){
      if(like.isLiked===true){
        setLikeCount((prevVal)=>{
          return(
            {
              likeCount:prevVal.likeCount-1,
              isLiked:!prevVal.isLiked
            }
          )
        })
      }
      else{
        setLikeCount((prevVal)=>{
          return(
            {
              likeCount:prevVal.likeCount+1,
              isLiked:!prevVal.isLiked
            }
          )
        })
      }
    }

function handleRetweeted(){
    retweet.isRetweeted ?
      setRetweetCount((prevVal)=>{return({retweetCount:prevVal.retweetCount-1, isRetweeted:!prevVal.isRetweeted})}):
      setRetweetCount((prevVal)=>{return({retweetCount:prevVal.retweetCount+1, isRetweeted:!prevVal.isRetweeted})})
    }


return (
      <div className="DisplayUserPosts">
            <img className="authorImg" src={props.authorImg} alt="author"></img>
            <div className="authorInfo">
              <h5 className="authorName">{props.authorName}</h5>
              <p className="authorProfile">{props.authorProfile}</p>
              <p className="postTime">. {props.postTime}</p>
              <BiDotsHorizontalRounded className="profileInfoDots"/>
            </div>
            <div className="displayPostContent">
              <p className="postContent">{props.postContent}</p>
              <div>{props.imageUrl && postImage}</div>
            </div>
           


            <div className="postStats">
              <div className="postStatsIcons postCommentIcon">
                <FaRegComment className="commentIcon" />
                <p>{commentCount}</p>
              </div>
              <div className="postStatsIcons postRetweetIcon" onClick={handleRetweeted}>
                <MdOutlineRepeat className="retweetIcon" style={retweetStyle} />
                <p style={retweetStyle}>{retweet.retweetCount}</p>
              </div>
              <div className="postStatsIcons postLikeIcon" onClick={handleLiked}>
                {like.isLiked?<FaHeart style={{color:"#F8519E"}} className="likeIcon" />:<FaRegHeart className="likeIcon" />}
                <p style={likeStyle}>{like.likeCount}</p>
              </div>
              <div className="postStatsIcons postShareIcon">
                <FiShare className="shareIcon" />
              </div>
            </div>
           
      </div>
    );
  }