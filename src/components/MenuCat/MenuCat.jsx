import {useState} from "react";
import "./MenuCat.css";
import Menu from "../Menu/Menu";
import Square from "../Images/add-square (1).png";
import SearchBtn from "../Images/search-normal.png";
import CloseBtn from "../Images/close.png";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Location from "../Location/Location";
import Benefits from "../Benefits/Benefits";
import IntroVideo from "../IntroVideo/IntroVideo";
import MentorDetails from "../MentorDetails/MentorDetails";
import RecommendedRoles from "../RecommendedRoles/RecommendedRoles"
import WebLinks from "../WebLinks/WebLinks";
import CircleBtn from "../Images/tick-circle.png";
const MenuCat = (props) => {

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
    const buttonValue3 = () => {
        setShow({...show, fourShow: !show.fourShow})
    }
    const buttonValue4 = () => {
        setShow({...show, fiveShow: !show.fiveShow})
    }
    const buttonValue5 = () => {
        setShow({...show, sixShow: !show.sixShow})
    }
    const buttonValue6 = () => {
        setShow({...show, sevenShow: !show.sevenShow})
    }
    const buttonValue7 = () => {
        setShow({...show, eightShow: !show.eightShow})
    }

    const contents = [{
        id: 1,
        text: "Category",
        search: "Search Category",
        image1: [SearchBtn],
        image2: [CloseBtn],
        image3: [CircleBtn],
        content1: "Technology",
        content2: "Development",
        content3: "Description",
        
    }]
    const titles = [{
        id : 1,
        title : "Category",
        },
    {
        id : 2,
        title : "Description"
    },
    {
        id : 3,
        title : "Location"
    },
    {
        id : 4,
        title : "Benefits"
    },
    {
        id : 5,
        title : "Intro Video"
    },
    {
        id : 6,
        title : "Mentor Details"
    },
    {
        id : 7,
        title : "Recommended Roles"
    },
    {
    id : 8,
        title : "Web Links & Resources"
    },
]
    

    return (
    <>
    <div className="MenuCat">
        <div className="MenuCat-1">
                    
                    <div>
                    <Menu identify='0' title={titles[0].title} buttonValue={buttonValue}/>
                    <Menu identify='1' title={titles[1].title} buttonValue1={buttonValue1}/>
                    <Menu identify='2' title={titles[2].title} buttonValue2={buttonValue2}/>
                    <Menu identify='3' title={titles[3].title} buttonValue3={buttonValue3}/>
                    <Menu identify='4' title={titles[4].title} buttonValue4={buttonValue4}/>
                    <Menu identify='5' title={titles[5].title} buttonValue5={buttonValue5}/>
                    <Menu identify='6' title={titles[6].title} buttonValue6={buttonValue6}/>
                    <Menu identify='7' title={titles[7].title} buttonValue7={buttonValue7}/> 
                    </div>
                    
                    
                    {/* {
                        titles.map((item, key)=>(
                            <Menu title={item?.title} key={key} onClick={() => buttonValue(true)}/>
                        ))
                    } */}
                    
                    <div className="assessment">
                        <div className="add">
                            <img src={Square} alt="" />
                            <p className="more">Add More</p>
                        </div>
                    </div>
                </div>
            
                {show.firstShow ? <Category 
                    text={contents[0].text}
                    content1={contents[0].content1}
                    content2={contents[0].content2}
                    search={contents[0].search}
                    image1={contents[0].image1}
                    image2={contents[0].image2}
                    /> : " "}

                {show.secondShow ? <Description
                    content3={contents[0].content3}
                    /> : ""}

                {show.thirdShow ? <Location /> : ""}

                {show.fourShow ? <Benefits /> : ""}

                {show.fiveShow ? <IntroVideo image2={contents[0].image2} /> : ""}

                {show.sixShow ? <MentorDetails /> : ""}

                {show.sevenShow ? <RecommendedRoles 
                image1={contents[0].image1}
                image2={contents[0].image2}/> : ""}

                {show.eightShow ? <WebLinks 
                image1={contents[0].image1}
                image2={contents[0].image2}/> : ""}
                </div>
            </>       
            );
    
}
export default MenuCat;