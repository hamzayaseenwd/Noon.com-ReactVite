import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';



const Slide = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/2ee2ac34-c52c-465c-90eb-1a75f6820ac4.png?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/fc1126f5-5186-47a3-b207-69f57dfa6b2f.png?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/5a0e2a09-32fe-49ce-8cd6-1082c3571856.png?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/52dd308f-c1f9-419c-bc13-817c05384b83.png?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/52a25365-3d6c-43f1-896e-80e56cf2012b.png?format=avif" alt="" width={"100%"} className='h-48'/></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0002/assets/aac48369-b009-4b8b-ad11-b402928bb756.png?format=avif" alt="" width={"100%"} className='h-48' /></SwiperSlide>
            
            


        </Swiper>
    );
};

export default Slide