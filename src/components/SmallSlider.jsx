import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules';


const SmallSlider = () => {
  return (
    <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay, FreeMode]}
            spaceBetween={10}
            slidesPerView={8}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/51260a41-caca-47a9-9911-129611d88cc6.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/48e7d146-f537-4902-97c1-b43aefacf9e3.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/12484ac6-ad98-4fce-bd04-669477ade7ec.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/c2fa27ca-4bcf-4b17-8831-3cfc335575b5.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/fb2f6ce2-419c-40ff-b1cd-77adaabd860d.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/ee346055-76f7-482b-8d18-f9afba0b6c0d.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/6a06648e-82bb-4ecf-9b25-c82a8a4720b8.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/1a7b4717-b494-45c7-82f2-b2ddf1fd3c8f.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/f56b3611-5b74-47e5-9261-7ef2db1ecd31.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/0ced82ed-4832-49a6-be3d-7e1001243269.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/84bdd49a-ef1a-404d-98fa-f555b249f96d.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/dfcbf954-c609-492b-925f-326e5c242e06.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/4c4006cc-37f1-4592-9694-aaeacdde8b2b.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/079404dc-4a7e-4fa1-b01e-c71818debb85.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/6f7397cf-9d65-43d2-98fd-19cdc12ce746.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/de461090-58ea-4fd5-97f8-291f407080f3.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/e5dfc70c-b5ce-48c5-b131-45205ed42c97.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/7e05ba0c-534e-4f44-bbdc-2b1f728d4490.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/53da0407-9c77-4e2d-b822-cbf81954ff5a.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/9960d852-378e-473c-9aef-bcffb63ec836.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/7e75835f-1ade-4003-bb2f-0f68d50270c8.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/a020f182-9470-45b5-92b9-0deb9f27e36f.png?format=avif" alt=""  /></SwiperSlide>
            <SwiperSlide><img src="https://f.nooncdn.com/mpcms/EN0001/assets/a2de506c-31bc-4b1e-b344-fe17938eb08d.png?format=avif" alt=""  /></SwiperSlide>
            
            
            
            


        </Swiper>
  )
}

export default SmallSlider