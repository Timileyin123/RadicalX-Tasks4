import {Link} from "react-router-dom";
import "./Catalogue.css";
//import Untick from "../Images/untick-circle.png";
import TickCircle from "../Images/tick-circle (1).png"
const Catalogue = () =>{
    return(
        <>
        <div className="catalogue">
            
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="cat">
                <img src={TickCircle} alt="" />
                <p>Internship Description</p>
            </div>
            </Link>

            <Link to="/InternshipGuide" style={{textDecoration: "none"}}>
            <div className="cat-1">
                <img src={TickCircle} alt="" />
                <p>Internship Guide</p>
            </div>
            </Link>
            
            <Link to="/Surveys" style={{textDecoration: "none"}}>
            <div className="cat-2">
                <img src={TickCircle} alt="" />
                <p>Surveys</p>
            </div>
            </Link>

            <Link to="/Settings" style={{textDecoration: "none",color:"black"}}>
            <div className="cat-3">
                <img src={TickCircle} alt="" />
                <p>Settings</p>
            </div>
            </Link>
                
        </div>
        </>
    );
}

export default Catalogue;