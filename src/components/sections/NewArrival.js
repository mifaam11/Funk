'use client';

import React, { useState, useEffect } from 'react';
import NewArrivalCard from '../card/NewArrivalCard';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { getData } from '@/utils/api';

const NewArrival = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData('/products/new-arrivals');
                setProducts(data);
            } catch (err) {
                console.error('Failed to fetch new arrivals:', err);
                setError('Failed to load new arrivals.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleViewMore = () => {
        router.push('/products');
    };

    return (
        <section className="py-10 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Our Collection</h2>
                    <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest collection of premium fashion items
                    </p>
                </div>

                {/* Grid Layout */}
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products.map((item, idx) => (
                            <div key={item.id || idx} className="px-1 sm:px-2">
                                <NewArrivalCard {...item} />
                            </div>
                        ))}
                    </div>
                )}

                {/* View More Button */}
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
