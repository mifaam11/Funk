'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    title: 'Baggy Pants',
    description: 'Latte Beige scar unisex Baggy pants',
    image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
    link: '/products/baggy-pants',
  },
  {
    title: 'Casual Hoodie',
    description: 'Comfy & cozy for every season',
    image: 'https://genrage.com/cdn/shop/files/63.png?v=1744986794&width=600',
    link: '/products/casual-hoodie',
  },
  {
    title: 'Streetwear Tee',
    description: 'Graphic tee for urban vibes',
    image: 'https://genrage.com/cdn/shop/files/54.png?v=1744986815&width=600',
    link: '/products/streetwear-tee',
  },
  {
    title: 'Cargo Joggers',
    description: 'Utility meets comfort',
    image: 'https://genrage.com/cdn/shop/files/60.png?v=1744986852&width=600',
    link: '/products/cargo-joggers',
  },
];

export default function Banner() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: function () {
      return (
        <div className="w-[10px] h-[10px] rounded-full bg-[rgba(255,255,255,0.4)] transition-all duration-300" />
      );
    },
  };

  return (
    <section className="relative">
      <div className="pt-16 md:pt-8 pb-10">
        <style>
          {`
            .custom-dots li.slick-active div {
              background-color: white !important;
            }
            .image-container {
              position: relative;
              width: 100%;
              height: 180px;
            }
            @media (min-width: 640px) {
              .image-container {
                height: 220px;
              }
            }
            @media (min-width: 768px) {
              .image-container {
                height: 300px;
              }
            }
          `}
        </style>

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="px-4 sm:px-6 md:px-0">
                <div className="bg-[#5c74e6] text-white shadow-lg px-4 py-6 sm:px-6 sm:py-10 md:py-12 flex flex-row items-center justify-between gap-6 sm:gap-8 rounded-xl md:rounded-none">
                  {/* Text Section - Always on left */}
                  <div className="flex-1 w-full md:w-auto text-left px-2 sm:px-4 md:px-6">
                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-white/90">{slide.description}</p>
                    <Link
                      href={slide.link}
                      className="inline-block mt-4 sm:mt-6 md:mt-10 px-4 py-2 bg-white text-black text-xs sm:text-sm font-medium rounded-full hover:bg-gray-100 transition"
                    >
                      Shop Now
                    </Link>
                  </div>

                  {/* Image Section - Always on right */}
                  <div className="flex-1 w-full md:w-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto md:mx-0">
                    <div className="image-container">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}