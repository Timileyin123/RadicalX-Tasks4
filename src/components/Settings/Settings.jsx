import {useState} from "react";
import Menu from "../Menu/Menu";
import BasicSettings from "../BasicSettings/BasicSettings";
import HeroImage from "../HeroImage/HeroImage";

const Settings = () => {

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
        title : "Basic Settings",
        },
    {
        id : 2,
        title : "Hero Image"
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
                    
                </div>
            
                {show.firstShow ? <BasicSettings
                    /> : " "}

                {show.secondShow ? <HeroImage
                    /> : ""}

                </div>
            </>       
            );
    
}
export default Settings;