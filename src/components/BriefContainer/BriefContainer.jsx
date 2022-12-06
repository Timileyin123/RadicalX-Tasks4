import Brief from "../Brief/Brief";

const BriefContaner= () => {

    const titles = [{
        id: 1,
        title : "Brief",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id: 2,
        title: "Requirements",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'
    },
    {
        id:3,
        title: "Milestones",
        text: 'Description',
        video: 'Drag n drop to upload your video',
        file: 'Filename.pptx'

    }]

        return (
            <>
                <div className="MenuCat-3">
                {
                titles.map((item, key) =>(
                    <Brief title={item?.title} text={item?.text} video={item?.video} file={item?.file} key={key}/>
                ))
            }
                </div>
            </>
        );
    
}

export default BriefContaner;