import MenuIcon from "../Images/menu (1).png";
import Square from "../Images/add-square (1).png";

const SubTitles = (props) => {

    const titles1 = [{
        id: 1,
        title : "Brief",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id: 2,
        title: "Requirements",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id:3,
        title: "Milestones",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'

    }]

    const titles2 = [{
        id: 1,
        title : "Duration",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id: 2,
        title: "Timeline",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id:3,
        title: "Deliverables",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'

    }]


    const titles3 = [{
        id: 1,
        title : "Curated Resources",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id: 2,
        title: "Events",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    }]


        let title = ''
    if (props.identify === '0') title = titles1    
    else if (props.identify === '1') title = titles2
    else if (props.identify === '2') title = titles3

    return (
        props.identify === '0' ? <>
            <div className="sub-title">
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[0].title}</p>
                </div>
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[1].title}</p>
                </div>
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[2].title}</p>
                </div>
                <div className="assessment-1">
                    <div className="add">
                        <img src={Square} alt="" />
                        <p>Add More</p>
                    </div>
                </div>
                            </div>
        </> :
        props.identify === '1' ? 
        <>
        <div className="sub-title">
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[0].title}</p>
                </div>
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[1].title}</p>
                </div>
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[2].title}</p>
                </div>
                <div className="assessment-1">
                    <div className="add">
                        <img src={Square} alt="" />
                        <p>Add More</p>
                    </div>
                </div>
                            </div>
        </> :
        props.identify === '2' ? 
        <>
        <div className="sub-title">
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[0].title}</p>
                </div>
                <div className="assessments">
                    <img src={MenuIcon} alt="" />
                    <p>{title[1].title}</p>
                </div>
                <div className="assessment-1">
                    <div className="add">
                        <img src={Square} alt="" />
                        <p>Add More</p>
                    </div>
                </div>
                            </div>
        </>: null
        
    );
    
}
 
export default SubTitles;