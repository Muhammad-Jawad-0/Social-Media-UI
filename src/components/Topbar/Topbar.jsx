import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import firstPersonImage from "../../assets/person/1.jpeg"
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Searching Friend or Posts"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        {/* ------------------------------------------------------------ images */}
        <img src={firstPersonImage} alt="person-image" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
