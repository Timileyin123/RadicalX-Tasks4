const Category = (props) => {
    
        return (
            <>
            <div className="MenuCat-2">
                    <div className="category">
                        <p className="cat-heading">Recommended Roles</p>
                        <div className="cat-body">  
                            <p className="search">Search Roles</p>
                            <img src={props.image1} alt="" />
                            <div className="cat-tags">
                                <div className="tag">
                                    <p>Fullstack Developer</p>
                                    <img src={props.image2} alt="" /></div>
                                <div className="tag">
                                    <p>Backend Developer</p>
                                    <img src={props.image2} alt="" />
                                </div>
                        </div>
                        </div>
                    </div>
                
                </div> 
            </>
                );
    
}

export default Category;