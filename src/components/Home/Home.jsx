import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from "../Catalogue/Catalogue";
import Header from "../Header/Header";
import "./Home.css";
import MenuCat from "../MenuCat/MenuCat";
import InternshipGuide from "../InternshipGuide/InternshipGuide";
import Surveys from "../Surveys/Surveys";
import Settings from "../Settings/Settings";
const Home = () => {
    
        return (
            <>
            <div className="Home">
                <Router>
                    <Header />
                    <Catalogue />
                    <Routes>
                        <Route path='/' element={<MenuCat />}>

                        </Route>
                        <Route path='/InternshipGuide' element={<InternshipGuide/>}></Route>
                        <Route path='/Surveys' element={<Surveys />}></Route>
                        <Route path='Settings' element={<Settings />}></Route>
                    </Routes>    
                </Router> 
            </div>
            </>
        );
    
}

export default Home;