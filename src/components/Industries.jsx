const Industries = ({ data }) => {
    const mapObj = data.acf.content[7]
    return (
        <div>
            <h1 className="text-center font-bold text-5xl mt-8 px-40">
                Meet federal regulations and ISO standards with industry-specific customizable solutions
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-8 px-28">
                {data.acf.content[7].list && data.acf.content[7].list.map((list, index) =>
                    <div
                        key={index}
                        style={{
                            border: '1px solid black',
                            backgroundImage: `url(${list.image.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            maxHeight: '292px'
                        }}
                        className="relative"
                    >
                        <div className="bg-black opacity-50 p-6 absolute top-0 left-0 right-0 bottom-0" />
                        <div className="text-white container z-50 relative p-20" dangerouslySetInnerHTML={{ __html: list.text }} />
                    </div>)}


            </div>
        </div>
    )
}

export default Industries