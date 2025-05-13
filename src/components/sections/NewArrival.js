'use client';

import React, { useState, useEffect } from 'react';
import NewArrivalCard from '../card/NewArrivalCard';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const items = [
    {
        title: 'Apex Red Unisex Boxy Vest',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 999,
        originalPrice: 2199,
    },
    {
        title: 'Vedha Black Unisex Straight Baggy Pants',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1699,
        originalPrice: 3199,
    },
    {
        title: 'Ghost Boxy Oversized Tshirt',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1299,
        originalPrice: 3199,
    },
    {
        title: 'Mutation Unisex Straight Fit Baggy Pants',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1799,
        originalPrice: 3199,
    },
    {
        title: 'Samudra Unisex Boxy Vest',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 999,
        originalPrice: 2199,
    },
    {
        title: 'Dawn Unisex Straight Fit Baggy Pants',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1699,
        originalPrice: 3199,
    },
    {
        title: 'Dusk Blue Slim Fit Jeans',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1899,
        originalPrice: 3499,
    },
    {
        title: 'Urban Grey Hooded Sweatshirt',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 1499,
        originalPrice: 2999,
    },
    {
        title: 'Classic White Sneakers',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 2299,
        originalPrice: 4599,
    },
    {
        title: 'Premium Leather Backpack',
        image: 'https://genrage.com/cdn/shop/files/72_53f73480-8433-4148-85d7-09682e19f373.png?v=1744986751&width=600',
        price: 2499,
        originalPrice: 4999,
    },
];

const NewArrival = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleViewMore = () => {
        // Redirect to the new arrivals page
        router.push('/products');
    };

    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">New Arrivals</h2>
                    <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest collection of premium fashion items
                    </p>
                </div>

                {/* Grid Layout - Show all cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="px-1 sm:px-2">
                            <NewArrivalCard {...item} />
                        </div>
                    ))}
                </div>

                {/* View More Button - Always shown and redirects */}
                <div className="text-center mt-8 md:mt-10">
                    <button
                        onClick={handleViewMore}
                        className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        View All New Arrivals
                        <FiChevronRight className="ml-1 sm:ml-2 text-base sm:text-lg" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;