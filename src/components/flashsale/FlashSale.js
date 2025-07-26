'use client';

import React, { useRef, useEffect, useState } from 'react';
import Card from '../card/Card';
import { getData } from '@/utils/api';

export default function FlashSale() {
    const scrollRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 34,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    return { ...prev, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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

    useEffect(() => {
        async function fetchFlashSaleItems() {
            try {
                setIsLoading(true);
                const data = await getData("/");
                const flashItems = data.filter(item => item.status === 'flash-sale');
                setProducts(flashItems);
            } catch (err) {
                console.error("Failed to load flash sale products", err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchFlashSaleItems();
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

    // ❗ Hide entire section if loading OR no flash sale items
    if (isLoading || products.length === 0) return null;

    return (
        <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="relative flex-shrink-0">
                            <span className="text-3xl animate-pulse">⚡</span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Flash Sale</h2>
                                <div className="flex items-center gap-1">
                                    <span className="hidden xs:inline text-xs font-medium text-gray-500 whitespace-nowrap">Ends in:</span>
                                    <div className="flex gap-1">
                                        <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded whitespace-nowrap">
                                            {String(timeLeft.hours).padStart(2, '0')}h
                                        </span>
                                        <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded whitespace-nowrap">
                                            {String(timeLeft.minutes).padStart(2, '0')}m
                                        </span>
                                        <span className="bg-gray-900 text-white text-xs font-bold px-1.5 py-0.5 rounded whitespace-nowrap">
                                            {String(timeLeft.seconds).padStart(2, '0')}s
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showControls && (
                        <div className="flex gap-2 flex-shrink-0">
                            <button
                                onClick={scrollLeft}
                                disabled={isAtStart}
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${isAtStart
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-800 shadow-md hover:bg-gray-50 hover:shadow-lg'
                                    }`}
                                aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                disabled={isAtEnd}
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${isAtEnd
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700'
                                    }`}
                                aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-6"
                >
                    {products.map((item, index) => (
                        <div
                            key={item._id || index}
                            className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 transform transition-all duration-300 hover:-translate-y-1"
                        >
                            <Card
                                title={item.name}
                                image={item.image}
                                price={item.price}
                                originalPrice={item.price * 1.2}
                                stockLeft={item.stock}
                                isNew={false}
                                brand={false}
                                flashSale
                            />
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
