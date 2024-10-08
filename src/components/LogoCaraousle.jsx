import Image from "next/image"

const LogoCarousle = ({ data }) => {
    return (
        <div className="bg-black py-10">
            <div className="text-center text-lg" style={{color: '#f0f0ff'}} dangerouslySetInnerHTML={{ __html: data.acf.content[1].title }} />
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
                    <li>
                        <Image src={data.acf.content[1].list[0].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[1].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[2].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[3].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[4].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[5].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[6].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[7].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[8].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                </ul>
                <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li>
                        <Image src={data.acf.content[1].list[0].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[1].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[2].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[3].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[4].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[5].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[6].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[7].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                    <li>
                        <Image src={data.acf.content[1].list[8].logo.url} quality={100} width={1000} height={1000} style={{ width: '162px', height: '100%', maxHeight: '44px' }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LogoCarousle