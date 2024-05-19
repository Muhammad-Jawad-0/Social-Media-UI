import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData.js";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts?.map((v, i) => (
          <Post key={i} post={v} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
