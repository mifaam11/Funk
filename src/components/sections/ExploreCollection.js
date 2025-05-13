"use client";
import React, { useState } from "react";
import Card from '../card/Card';
// import ExploreCollectionCard from "../card/ExploreCollectionCard";

const products = [
    {
        title: "Classic Denim Jacket",
        price: "1,999",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Elegant Handbag",
        price: "2,499",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Smart Casual Shoes",
        price: "3,299",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
    {
        title: "Floral Summer Dress",
        price: "1,599",
        image: "https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790928.jpg",
    },
];

const ExploreCollection = () => {
    const [visibleProducts, setVisibleProducts] = useState(9);
    const showMoreProducts = () => {
        setVisibleProducts(products.length);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                        Explore Our Collection
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hand-picked styles for the modern wardrobe. Discover premium fashion at great value.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.slice(0, visibleProducts).map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>

                {/* View More Button */}
                {visibleProducts < products.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={showMoreProducts}
                            className="px-8 py-3 bg-white border-2 border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExploreCollection;