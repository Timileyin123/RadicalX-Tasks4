import MenuIcon from "../Images/menu (1).png";
import Square from "../Images/add-square (1).png";
const SubTitle = () => {

        return (
            <>
                <div className="sub-title">
                                    <div className="assessments">
                                        <img src={MenuIcon} alt="" />
                                        <p>Duration</p>
                                    </div>
                                    <div className="assessments">
                                        <img src={MenuIcon} alt="" />
                                        <p>Timeline</p>
                                    </div>
                                    <div className="assessments">
                                        <img src={MenuIcon} alt="" />
                                        <p>Deliverables</p>
                                    </div>
                                    <div className="assessment-1">
                        <div className="add">
                            <img src={Square} alt="" />
                            <p>Add More</p>
                        </div>
                    </div>
                                </div>
            </>
        );
    
}

export default SubTitle;