"use client";
import React, { useState, useEffect, useRef } from "react";
import { products as allProducts } from "@/utils/raw/rawData";
import NewArrivalCard from "@/components/card/NewArrivalCard";

export default function Page() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [sortOption, setSortOption] = useState("featured");
    const [visibleCount, setVisibleCount] = useState(9);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setVisibleCount((prev) => prev + 6);
                    }, 500);
                }
            },
            { rootMargin: "100px" }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, []);

    const visibleProducts = allProducts.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-12 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Filter Drawer */}
                {mobileFiltersOpen && (
                    <div className="fixed inset-0 z-40 flex lg:hidden">
                        <div
                            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
                            onClick={() => setMobileFiltersOpen(false)}
                        />
                        <div className="relative ml-auto h-full w-80 max-w-full bg-white shadow-xl p-4 overflow-y-auto z-50">
                            {/* Header with Close Button */}
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Filter Options */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Categories</h3>
                                    {/* Add category filter options */}
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Price Range</h3>
                                    {/* Add price range filter options */}
                                </div>

                                {/* Optional Close Button at Bottom */}
                                <div className="mt-6">
                                    <button
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                                    >
                                        Close Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header */}
                <div className="text-center mb-10 relative">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                        Our Products
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest collection of high-quality products designed for your lifestyle.
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-4 space-y-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div>
                                <h3 className="font-medium mb-3">Categories</h3>
                                {/* Category options here */}
                            </div>
                            <div>
                                <h3 className="font-medium mb-3">Price Range</h3>
                                {/* Price range options here */}
                            </div>
                        </div>
                    </aside>

                    {/* Product Section */}
                    <section className="lg:col-span-3 w-full">
                        {/* Top Bar */}
                        <div className="flex items-center justify-between mb-4 lg:hidden">
                            <button
                                onClick={() => setMobileFiltersOpen(true)}
                                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Filters
                            </button>
                            <span className="text-xs sm:text-sm text-gray-500">
                                Showing {visibleProducts.length} of {allProducts.length} products
                            </span>
                        </div>

                        {/* Sort and Info Bar */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                            <div className="hidden sm:block text-sm text-gray-500">
                                Showing {visibleProducts.length} of {allProducts.length} products
                            </div>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            >
                                <option value="featured">Sort by: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 [@media(min-width:321px)]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                            {visibleProducts.map((product) => (
                                <NewArrivalCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.name}
                                    image={product.img}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    rating={product.rating || 4.5}
                                    reviewCount={product.reviewCount || 24}
                                    colors={product.colors || ["black", "white", "blue"]}
                                    isNew={product.isNew ?? true}
                                />
                            ))}
                        </div>

                        {/* Infinite Scroll Loader */}
                        {visibleCount < allProducts.length && (
                            <div ref={loadMoreRef} className="mt-10 text-center">
                                <span className="text-sm text-gray-500">Loading more products...</span>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
