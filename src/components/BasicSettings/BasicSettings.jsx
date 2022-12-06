import "./BasicSettings.css";
const BasicSettings = () => {

        return (
            <>
            <div className="MenuCat-5">
                    <div className="category-2">
                        <p className="cat-heading">Internship URL</p>
                        <div className="cat-body-2">  
                            <div className="socialUrl-1">
                            <p>radicalx-internship-url</p>
                        </div>
                        <div className="access">
                            <p className="cat-heading">
                                Access
                            </p>
                            <div className="internships">
                                <div className="intern-1">
                                        <input type="checkbox" placeholder="" />
                                    <p>Private Internship</p>
                                </div>
                                <div className="intern-1">
                                    <input type="checkbox" />
                                    <p>Hidden Internship</p>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="access">
                            <p className="cat-heading">
                                Security
                            </p>
                            <div className="internships">
                                <div className="intern-1">
                                        <input type="checkbox" placeholder="" />
                                    <p>Disable Text Copying</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
            </div> 
            </>
        );
    
}

export default BasicSettings;