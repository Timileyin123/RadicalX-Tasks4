import VideoBtn from "../Images/document-upload.png";

const Resource = (props) => {
    
        return (
            <>
            <div className="MenuCat-2" style={{margin:"0em"}}>
                    <div className="category">
                        <p className="cat-heading">{props.title}</p>
                        <div className="cat-body" style={{paddingBottom:"0.5em"}}>  
                            <p className="search">{props.text}</p>
                        </div>
                        <div className="drag-drop">
                            <p>{props.video}</p>
                            <img src={VideoBtn} alt="" />
                        </div>
                        <div className="cat-tags">
                                <div className="tag-1">
                                    <p>{props.file}</p>
                                    <img src={props.image2} alt="" /></div>
                        </div>
                    </div>
            </div> 
            </>
                );
    
}

export default Resource;