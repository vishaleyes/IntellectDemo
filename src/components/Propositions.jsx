import Image from "next/image"

const Propositions = ({ data }) => {
    return (
        <>
            <div class="mb-4 mt-10">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center gap-12" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{data.acf.content[6].list[0].tab_name}</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">{data.acf.content[6].list[1].tab_name}</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">{data.acf.content[6].list[2].tab_name}</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">{data.acf.content[6].list[3].tab_name}</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="fifth-tab" data-tabs-target="#fifth" type="button" role="tab" aria-controls="fifth" aria-selected="false">{data.acf.content[6].list[4].tab_name}</button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content" style={{ padding: '0 100px' }}>
                <div class="hidden p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="flex gap-24">
                        <div style={{ minWidth: '500px' }}>
                            <Image src={data.acf.content[6].list[0].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[0].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[0].text }} />
                            <div className="mt-6">
                                <a href={data.acf.content[6].list[0].button.link} className="btn btn_primary !rounded">
                                    {data.acf.content[6].list[0].button.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <div className="flex gap-24">
                        <div style={{ minWidth: '500px' }}>
                            <Image src={data.acf.content[6].list[1].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[1].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[1].text }} />
                            <div className="mt-6">
                                <a href={data.acf.content[6].list[1].button.link} className="btn btn_primary !rounded">
                                    {data.acf.content[6].list[1].button.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 rounded-lg" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <div className="flex gap-24">
                        <div style={{ minWidth: '500px' }}>
                            <Image src={data.acf.content[6].list[2].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[2].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[2].text }} />
                            <div className="mt-6">
                                <a href={data.acf.content[6].list[2].button.link} className="btn btn_primary !rounded">
                                    {data.acf.content[6].list[2].button.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 rounded-lg" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                    <div className="flex gap-24">
                        <div style={{ minWidth: '500px' }}>
                            <Image src={data.acf.content[6].list[3].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[3].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[3].text }} />
                            <div className="mt-6">
                                <a href={data.acf.content[6].list[3].button.link} className="btn btn_primary !rounded">
                                    {data.acf.content[6].list[3].button.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 rounded-lg" id="fifth" role="tabpanel" aria-labelledby="fifth-tab">
                    <div className="flex gap-24">
                        <div style={{ minWidth: '500px' }}>
                            <Image src={data.acf.content[6].list[4].image.url} quality={100} width={1000} height={1000} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[4].title }} className="mb-6 text-2xl font-semibold" style={{ letterSpacing: '-0.5' }} />
                            <div dangerouslySetInnerHTML={{ __html: data.acf.content[6].list[4].text }} />
                            {/* <div className="mt-6">
                                <a href={data.acf.content[6].list[2].button.link} className="btn btn_primary !rounded">
                                    {data.acf.content[6].list[2].button.text}
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Propositions

