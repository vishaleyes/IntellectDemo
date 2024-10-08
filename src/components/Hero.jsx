import Image from "next/image"

const Hero = ({ data }) => {
    return (
        <div className="!my-5" style={{padding: '0 100px'}}>
            <h1 className="text-center mb-5"
                style={{
                    fontSize: '48px',
                    lineHeight: 1.3,
                    fontWeight: 600,
                    // marginBottom: '54px'
                }}>
                {data.acf.content[0].image.title}
            </h1>
            <Image src={data.acf.content[0].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: 'auto', borderRadius: '80px' }} />
            <div className="flex justify-center mt-5 flex-col items-center gap-4">
                <div style={{ maxWidth: '440px', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: data.acf.content[0].text }} />
                <button style={{backgroundColor: '#ff4664', borderRadius: '20px', letterSpacing: '-0.5px'}} className="px-8 h-10 text-cyan-50 font-bold">
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Hero