"use client";

import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { getData } from "@/utils/api";

const ExploreCollection = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(9);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getData("/");
                const filtered = data.filter(item => item.status === "products");
                setProducts(filtered);
            } catch (error) {
                console.error("Failed to load explore collection products:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const showMoreProducts = () => {
        setVisibleProducts(products.length);
    };

    // ✅ Loader while fetching
    if (isLoading) {
        return (
            <section className="py-20 flex justify-center items-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    // ✅ Return nothing if no products found
    if (products.length === 0) return null;

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
                            key={item._id || idx}
                            title={item.name}
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
