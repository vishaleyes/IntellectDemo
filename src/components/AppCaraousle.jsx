import Image from "next/image"

const AppCarousle = ({ data }) => {
    return (
        <div className="bg-black py-10 mt-12">
            <div className="text-center text-4xl mb-4" style={{ color: '#f0f0ff' }} dangerouslySetInnerHTML={{ __html: data.acf.content[8].title }} />
            <div
                x-data="{}"
                x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                class="w-full mt-8 mb-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {data.acf.content[8].logotypes && data.acf.content[8].logotypes.map((list, index) =>
                        <li key={index} >
                            <Image src={list.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                        </li>
                    )}
                </ul>
                <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {data.acf.content[8].logotypes && data.acf.content[8].logotypes.map((list, index) =>
                        <li  key={index} >
                            <Image src={list.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                        </li>
                    )}
                </ul>
            </div>
            <div className="text-left text-lg px-24 mt-6" style={{ color: '#f0f0ff' }} dangerouslySetInnerHTML={{ __html: data.acf.content[8].text }} />
        </div>
    )
}

export default AppCarousle