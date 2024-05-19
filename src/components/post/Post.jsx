import "./post.css";
import postProfileImg from "../../assets/person/1.jpeg";
import firstPostImg from "../../assets/post/1.jpeg";
import heartIcon from "../../assets/heart.png";
import likeIcon from "../../assets/like.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData.js";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked)
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.photo} alt="firstPostImg" />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img
              className="likeIcon"
              src={heartIcon}
              onClick={likeHandler}
              alt="heartIcon"
            />
            <img
              className="likeIcon"
              src={likeIcon}
              onClick={likeHandler}
              alt="likeIcon"
            />
            <span className="postlikeCounter">{like} People Like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
