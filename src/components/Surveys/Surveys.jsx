import {useState} from "react";
import Menu from "../Menu/Menu";
import Square from "../Images/additem.png";
import SurveyOne from "../SurveyOne/SurveyOne"

const Survey = () => {

    const [show, setShow] = useState({
        show: false, 
    });

    const buttonValue = () => {
        setShow({...show, firstShow: !show.firstShow})
    }

    const buttonValue1 = () => {
        setShow({...show, secondShow: !show.secondShow})
    }

    const titles = [{
        id : 1,
        title : "Survey 1",
        },
    {
        id : 2,
        title : "Survey 2"
    },
]
    

    return (
    <>
    <div className="MenuCat">
        <div className="MenuCat-1">
                    
                    <div>
                    <Menu identify='0' title={titles[0].title} buttonValue={buttonValue}/>
                    <Menu identify='1' title={titles[1].title} buttonValue1={buttonValue1}/>
                    </div>
                    
                    
                    {/* {
                        titles.map((item, key)=>(
                            <Menu title={item?.title} key={key} onClick={() => buttonValue(true)}/>
                        ))
                    } */}
                    
                    <div className="assessment-2">
                        <div className="add">
                            <img src={Square} alt="" />
                            <p className="more">Add Survey</p>
                        </div>
                    </div>
                </div>
            
                {show.firstShow ? <SurveyOne
                    /> : " "}

                {show.secondShow ? null : ""}

                </div>
            </>       
            );
    
}
export default Survey;