import "./Menu.css";
import DropDown from "../Images/arrow-dropdown.png";
import MenuToggle from "../Images/menu.png";

const Menu = (props) =>{

    const btn = (
        props.buttonValue || props.buttonValue1 || props.buttonValue2 || props.buttonValue3 || props.buttonValue4 || props.buttonValue5 || props.buttonValue6 || props.buttonValue7
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
                            buttonValues()
                            }>
                                <div className="title" >
                                    <button>{props.title}</button>
                            
                                    <img src={DropDown} alt="" />
                                </div>
                        </div>    
                </div> 
            </>
        );
    
}

export default Menu;