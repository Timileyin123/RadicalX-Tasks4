import "./IntroVideo.css";
import VideoBtn from "../Images/document-upload.png";
const IntroVideo = (props) => {

        return (
            <>
            <div className="MenuCat-2">
                <div className="category">
                        <p className="cat-heading">Intro Video</p>
                        
                    <div className="drag-drop">
                        <p>Drag n drop to upload your video</p>
                        <img src={VideoBtn} alt="" />
                    </div>
                        <div className="cat-tags">
                                <div className="tag-1">
                                    <p>Intro Video.mp4</p>
                                    <img src={props.image2} alt="" /></div>
                        </div>
                    </div>
            </div>
            </>
        );
    
}

export default IntroVideo;