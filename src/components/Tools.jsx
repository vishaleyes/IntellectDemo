import Image from "next/image"

const Tools = ({ data }) => {
    return (
        <div style={{ padding: '0 100px' }} className="mt-8">
            <h1 className="text-center font-semibold mb-14" style={{ fontSize: '54px' }}>{data.acf.content[4].title}</h1>
            <div className="flex gap-24">
                <div style={{ minWidth: '480px' }}>
                    <Image src={data.acf.content[4].list[0].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="flex justify-center flex-col">
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[0].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[0].text }} />
                </div>
            </div>
            <div className="flex gap-24 flex-row-reverse">
                <div style={{ minWidth: '480px', width: '480px' }}>
                    <video controls='controls' src={data.acf.content[4].list[1].video} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="flex justify-center flex-col text-left flex-1">
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[1].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[1].text }} />
                </div>
            </div>
            <div className="flex gap-24">
                <div style={{ minWidth: '480px' }}>
                    <Image src={data.acf.content[4].list[2].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <div className="flex justify-center flex-col">
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[2].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[4].list[2].text }} />
                </div>
            </div>
        </div>
    )
}

export default Tools