import Image from "next/image"

const Banner = ({ data }) => {
    return (
        <div className="mt-8">
            <div style={{ padding: '63px 100px 72px' }} className="flex justify-between bg-black gap-">
                <div className="text-white">
                    <div className="text-6xl mb-8" dangerouslySetInnerHTML={{ __html: data.acf.content[10].title }} style={{ letterSpacing: '-0.5px' }} />
                    <div dangerouslySetInnerHTML={{ __html: data.acf.content[10].text }} />
                </div>
                <div className="flex gap-10 items-center text-white">
                    <a href={data.acf.content[10].buttons[0].link} className="btn btn_primary !rounded-none">
                        {data.acf.content[10].buttons[0].text}
                    </a>
                    <a href={data.acf.content[10].buttons[1].link} className="btn btn_primary !rounded-none">
                        {data.acf.content[10].buttons[1].text}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner