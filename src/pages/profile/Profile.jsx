import Topbar from "../../components/Topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import postThreeImg from "../../assets/post/3.jpeg";
import personSevenImg from "../../assets/person/7.jpeg";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={postThreeImg} alt="" />
              <img className="profileUserImg" src={personSevenImg} alt="" />
            </div>
            <div className="profileInfo">
              <h3 className="profileInfoName">safak kocaoglu</h3>
              <span className="profileInfoDesc">hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
