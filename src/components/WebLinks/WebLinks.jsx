import "./WebLinks.css";
import LinkIcon from "../Images/link-1.png";
import SquareIcon from "../Images/add-square (2).png";

const WebLinks=()=> {

        return (
            <>
            <div className="MenuCat-2">
                    <div className="category-2">
                        <p className="cat-heading">Recommended Roles</p>
                        <div className="cat-body-2">  
                            <div className="socialUrl">
                            <img src={LinkIcon} alt="" />
                            <p>Add URL</p>
                        </div>
                        <div className="pills">
                            <img src={SquareIcon} alt="" />
                            <p>Add URL</p>
                        </div>
                        </div>
                    </div>
                
            </div> 
            </>
        );
    
}

export default WebLinks;