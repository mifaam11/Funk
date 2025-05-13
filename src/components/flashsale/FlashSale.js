'use client';
import React, { useRef, useEffect, useState } from 'react';
import Card from '../card/Card';

const flashSaleItems = [
    {
        title: "EliteShield Performance Men's Jackets",
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 255000,
        originalPrice: 525000,
        sold: 9,
        total: 10,
    },
    {
        title: "Gentlemen's Summer Gray Hat - Premium Blend",
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 99000,
        originalPrice: 150000,
        sold: 9,
        total: 10,
    },
    {
        title: 'OptiZoom Camera Shoulder Bag',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 250000,
        originalPrice: 425000,
        sold: 5,
        total: 10,
    },
    {
        title: 'Cloudy Chic - Grey Peep Toe Heeled Sandals',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 270000,
        originalPrice: 580000,
        sold: 5,
        total: 10,
    },
    {
        title: 'Premium Leather Wallet with RFID Protection',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 120000,
        originalPrice: 200000,
        sold: 7,
        total: 10,
    },
    {
        title: 'Wireless Noise Cancelling Headphones',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 450000,
        originalPrice: 750000,
        sold: 3,
        total: 10,
    },
];

export default function FlashSale() {
    const scrollRef = useRef(null);
    const [showControls, setShowControls] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setShowControls(scrollRef.current?.scrollWidth > scrollRef.current?.clientWidth);
            checkScrollPosition();
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        scrollRef.current?.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollRef.current?.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.firstChild?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.firstChild?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-6 md:py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-2xl">⚡</span>
                        <h2 className="text-xl font-semibold truncate">Flash Sale</h2>
                    </div>

                    {showControls && (
                        <div className="flex gap-2 flex-shrink-0 ml-4">
                            <button
                                onClick={scrollLeft}
                                disabled={isAtStart}
                                className={`w-8 h-8 md:w-9 md:h-9 rounded border flex items-center justify-center text-lg md:text-xl transition ${isAtStart
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                                aria-label="Scroll left"
                            >
                                ←
                            </button>
                            <button
                                onClick={scrollRight}
                                disabled={isAtEnd}
                                className={`w-8 h-8 md:w-9 md:h-9 rounded flex items-center justify-center text-lg md:text-xl transition ${isAtEnd
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                                aria-label="Scroll right"
                            >
                                →
                            </button>
                        </div>
                    )}
                </div>

                {/* Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
                >
                    {flashSaleItems.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64">
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}