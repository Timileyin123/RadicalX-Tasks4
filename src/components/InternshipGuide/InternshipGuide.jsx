import {useState} from "react";
import Square from "../Images/additem.png";
import Guides from "../Guides/Guides";
import BriefContainer from "../BriefContainer/BriefContainer";
import Schedule from "../Schedule/Schedule";
import Resources from "../Resources/Resources";
const InternshipGuide = () => {

    const [show, setShow] = useState({
        show: false, 
    });


    const buttonValue = () => {
        setShow({...show, firstShow: !show.firstShow})
    }

    const buttonValue1 = () => {
        setShow({...show, secondShow: !show.secondShow})
    }

    const buttonValue2 = () => {
        setShow({...show, thirdShow: !show.thirdShow})
    }

    const titles = [{
        id : 1,
        title : "Overview",
        },
    {
        id : 2,
        title : "Schedule"
    },
    {
        id : 3,
        title : "Resources"
    },

]
    

    return (
    <>
    <div className="MenuCat">
        <div className="MenuCat-1">
                    
                    <div>
                    <Guides identify='0' title={titles[0].title} buttonValue={buttonValue}/>
                    <Guides identify='1' title={titles[1].title} buttonValue1={buttonValue1}/>
                    <Guides identify='2' title={titles[2].title} buttonValue2={buttonValue2}/>
                    </div>
                    
                    
                    {/* {
                        titles.map((item, key)=>(
                            <Menu title={item?.title} key={key} onClick={() => buttonValue(true)}/>
                        ))
                    } */}
                    
                    <div className="assessment-2">
                        <div className="add">
                            <img src={Square} alt="" />
                            <p>Add Chapter</p>
                        </div>
                    </div>
                </div>
            
                {show.firstShow ? <BriefContainer 
                    /> : " "}

                {show.secondShow ? <Schedule
                    /> : ""}

                {show.thirdShow ? <Resources/> : ""}                
                </div>
            </>       
            );
    
}
export default InternshipGuide;