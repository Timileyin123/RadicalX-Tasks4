import DropDown from "../Images/arrow-dropdown.png";
import MenuToggle from "../Images/menu.png";
import { useState } from "react";
import SubTitles from "../SubTitles/SubTitles";

const Guides = (props) =>{

    const [showTitle, setShowTitle] = useState(false);

    const subTitle = () => {
        setShowTitle(!showTitle)
    } 

    const btn = (
        props.buttonValue || props.buttonValue1 || props.buttonValue2
    );
    
    const buttonValues = () => {
        btn()
    };

        return (
            <>
                
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module" onClick={() => 
                            buttonValues() ||
                            subTitle()
                            }>
                                <div className="title" >
                                    <button>{props.title}</button>
                            
                                    <img src={DropDown} alt="" />
                                </div>
                                {showTitle ? <SubTitles identify={props.identify} /> : ""} 
                        </div>    
                
        
                </div> 
            </>
        );
    
}

export default Guides;