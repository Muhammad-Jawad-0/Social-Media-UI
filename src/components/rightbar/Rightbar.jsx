import "./rightbar.css";
import gift from "../../assets/gift.png";
import Ad from "../../assets/ad.png";
import firstpersonImg from "../../assets/person/1.jpeg";
import secondpersonImg from "../../assets/person/2.jpeg";
import thirdpersonImg from "../../assets/person/3.jpeg";
import fourthpersonImg from "../../assets/person/4.jpeg";
import fifthpersonImg from "../../assets/person/5.jpeg";
import sixthpersonImg from "../../assets/person/6.jpeg";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="" />
          <span className="birthdayText">
            <b>pola foster</b> and <b>3 others friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src={Ad} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((v, i) => (
            <Online key={i} user={v} />
          ))}
          {/* -------------------------------------------- */}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Karachi</span>
          </div>
          {/* ------------------------------------------------ */}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Pakistan</span>
          </div>
          {/* ------------------------------------------------ */}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={firstpersonImg} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={secondpersonImg}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={thirdpersonImg} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={fourthpersonImg}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={fifthpersonImg} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={sixthpersonImg} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
