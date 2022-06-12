import {BiDotsHorizontalRounded} from "react-icons/bi"
import {FaRegComment,FaRegHeart } from "react-icons/fa"
import {FiShare} from "react-icons/fi"
import {MdOutlineRepeat} from "react-icons/md"
export default function DisplayUserPosts(props) {
      
      let postImage=<img className="postImage" src={props.imageUrl}></img>
      
    return (
      <div className="DisplayUserPosts">
            <img className="authorImg" src={props.authorImg} alt="author image"></img>
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
              <div className="postStatsIcons">
                <FaRegComment className="commentIcon" />
                <p>{props.commentCount}</p>
              </div>
              <div className="postStatsIcons">
                <MdOutlineRepeat className="retweetIcon" />
                <p>{props.retweetCount}</p>
              </div>
              <div className="postStatsIcons">
                <FaRegHeart className="likeIcon" />
                <p>{props.likeCount}</p>
              </div>
              <div className="postStatsIcons">
                <FiShare className="shareIcon" />
              </div>
            </div>
           
      </div>
    );
  }