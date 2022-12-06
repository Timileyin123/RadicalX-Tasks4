import "./MentorDetails.css";
import  SideIcon from "../Images/image.png";
import NameIcon from "../Images/profile.png";
import SMSIcon from "../Images/sms.png";
import LinkIcon from "../Images/link.png";

const MentorDetails= () => {

    const Mentor =(

            <div className="MenuCat-2">
                    <div className="category-1">
                        <p className="cat-heading">Mentor Details</p>
                        <div className="mentorPic"></div>
                        <div className="sideIcon">
                            <img src={SideIcon} alt="" />
                        </div>
                        <div className="cat-body-1">
                            <div className="name">
                                <img src={NameIcon} alt="" />
                                <p>Name</p>
                            </div>
                            <div className="name">
                                <img src={SMSIcon} alt="" />
                                <p>Email address</p>
                            </div>
                        </div>
                        <div className="socialUrl">
                            <img src={LinkIcon} alt="" />
                            <p>LinkedIn URL (optional)</p>
                        </div>
                        </div> 
                    
            </div>
                
    );
        return (
            <>
                {Mentor}
            </>
        );
    
}

export default MentorDetails;