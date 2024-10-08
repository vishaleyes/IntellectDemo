const Features = ({ data }) => {
    return (
        <div style={{ padding: '0 100px' }} className="mt-8">
            <h1 className="text-center font-semibold mb-14" style={{ fontSize: '54px' }}>{data.acf.content[2].title}</h1>
            <div className="grid grid-cols-2 gap-y-28 gap-x-28">
                <div className="col-span-1">
                    <div className="font-semibold text-2xl mb-6" dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[0].title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[0].text }} />
                </div>
                <div className="col-span-1">
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[1].title }} />
                </div>
                <div className="col-span-1">
                    <div className="font-semibold text-2xl mb-6" dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[2].title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[2].text }} />
                </div>
                <div className="col-span-1">
                    <div className="font-semibold text-2xl mb-6" dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[3].title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[2].list[3].text }} />
                </div>
            </div>
        </div>
    )
}

export default Features