import location from "../Images/location.png";
import DropDown from "../Images/arrow-down.png";

const Location = () => {

        return (
            <>
            <div className="MenuCat-2">

                    <div className="category">
                        <p className="cat-heading">Location</p>
                        <div className="cat-body">
                            <img src={location} className="locate" alt="" />
                            <input type="search" placeholder="Select Location" id="location" className="location"/>
                            <img className="" src={DropDown} alt="" />
                        </div>
                    </div>
                </div>
            </>
        );
    
}

export default Location;