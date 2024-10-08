'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const ChildResources = ({ data }) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        setResources(data)
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper !px-12 mt-8 mb-12"
        >
            {resources && resources.length > 0 && resources.map((resource, index) =>
                <SwiperSlide key={index}>
                    <div className="bg-white border border-gray-200 rounded-lg shadow" style={{ minHeight: '590px' }} >
                        <a href="#">
                            <img className="rounded-t-lg" src={resource.acf.content[0].image.url} alt="" style={{ maxHeight: '284px' }} />
                        </a>
                        <div className='p-8 text-left'>
                            <p className='font-semibold text-2xl mb-4'>
                                {resource.acf.content[0].title}
                            </p>
                            <p className='font-semibold text-base mb-4'>
                                {resource.acf.subtitle}
                            </p>
                            <p className='font-semibold text-base mb-4'>
                                {formatDate(resource.post_date)}
                            </p>
                            <p className='mt-6'>
                                {resource.acf.short_description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default ChildResources