import Resource from "../Resource/Resource";

const Resources = () => {

    const titles = [{
        id: 1,
        title : "Curated Resources",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id: 2,
        title: "Events",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    ]

        return (
            <>
                <div className="MenuCat-4">
                {
                titles.map((item, key) =>(
                    <Resource title={item?.title} text={item?.text} video={item?.video} file={item?.file} key={key}/>
                ))
            }
                </div>
            </>
        );
    
}

export default Resources;