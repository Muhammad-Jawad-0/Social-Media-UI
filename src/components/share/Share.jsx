import "./share.css"
import shareProfilePicture from "../../assets/person/1.jpeg"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={shareProfilePicture} alt="profileImg" />
                <input placeholder="What's Your Mind" className="shareInput" type="text" />
            </div>
            {/* --------------------------- */}
            <hr className="shareHr" />
            {/* ----------------- */}
            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photos or Videos</span>
                    </div>
                    {/* -------------------------------------- */}
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    {/* -------------------------------------- */}
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Loaction</span>
                    </div>
                    {/* -------------------------------------- */}
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
