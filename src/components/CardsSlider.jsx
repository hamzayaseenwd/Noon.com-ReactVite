import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from './Cards';

const CardsSlider = () => {

    const cardsObj = [
        {
            image: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "Apple Iphone 14 pro Max",
            description: " Iphone 14 pro Max",
            price: "AED: 4633",
        },
        {
            image: "https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
            title: "PlayStation",
            description: " Sony PlayStation 5",
            price: "AED: 1840",
        },
        {
            image: "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
            title: "T500 Watch",
            description: "T500 Bluetooth Touch Watch",
            price: "AED: 19.50",
        },
        {
            image: "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
            title: "Kiko Milano",
            description: "Double Touch Liquid Lips",
            price: "AED: 59.50",
        },
        {
            image: "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
            title: "Apple Iphone ",
            description: " Iphone 11 pro",
            price: "AED: 1949",
        },
        {
            image: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "Apple Iphone 14 pro Max",
            description: " Iphone 14 pro Max",
            price: "AED: 4633",
        },
        {
            image: "https://f.nooncdn.com/p/v1686205684/N50867004A_1.jpg?format=avif&width=240",
            title: "Apple Ipad",
            description: "Apple Ipad 2021 9th Generation",
            price: "AED: 1069",
        },
        {
            image: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "Apple Iphone 14 pro Max",
            description: " Iphone 14 pro Max",
            price: "AED: 4633",
        },
        {
            image: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "Apple Iphone 14 pro Max",
            description: " Iphone 14 pro Max",
            price: "AED: 4633",
        },
        {
            image: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
            title: "Apple Iphone 14 pro Max",
            description: " Iphone 14 pro Max",
            price: "AED: 4633",
        },
    ]


    return (
    <>

<Swiper
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={6}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>
{cardsObj.map((obj)={
    const [image, title, description, price] = Obj
< SwiperSlide >
<Cards
image={image}
title={title}
description={description}
price={price} />
</SwiperSlide>})}
{/* <SwiperSlide></SwiperSlide>*/}
</Swiper>

</>    

)
    
    

export default CardsSlider