
const Category = (props) => {
    
        return (
            <>
            <div className="MenuCat-2">
                    <div className="category">
                        <p className="cat-heading">{props.text}</p>
                        <div className="cat-body">  
                            <p className="search">{props.search}</p>
                            <img src={props.image1} alt="" />
                            <div className="cat-tags">
                                <div className="tag">
                                    <p>{props.content1}</p>
                                    <img src={props.image2} alt="" /></div>
                                <div className="tag">
                                    <p>{props.content2}</p>
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