'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Banner() {
  const slides = [
    {
      image: "https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_incoming",
      price: "Rs.1600/-",
    },
    {
      image: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_incoming",
      price: "Rs.1600/-",
    },
    {
      image: "https://img.freepik.com/free-photo/black-jeep-is-parked-desert-with-other-cars_1340-35824.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_incoming",
      price: "Rs.1600/-",
    },
  ];

  return (


    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="w-full h-[600px] relative z-1"
    >
      {/* byme */}
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Banner Content */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-8 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Premium Agriculture Equipments in India
              </h1>
              <p className="text-lg mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium w-fit">
                Call Now
              </button>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-lg">
                {slide.price}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


  );
}
