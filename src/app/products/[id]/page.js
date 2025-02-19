'use client'
import { products } from '@/utils/raw/rawData';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
export default function Page() {
    const router = useParams();
    const { id } = router;

    // Use local state to handle data loading and error states
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const foundProduct = products.find((prod) => prod.id === parseInt(id));
            setProduct(foundProduct);
        }
    }, [id]); // Runs when `id` changes (or page first loads)
    // If the product is not found, show a message
    if (product === null) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center text-xl">Product not found</div>;
    }
    return (

        <div className="container w-[90%] mx-auto p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Product Image */}
                <div>
                    {/* Back Button and Product Title */}
                    <div className="mb-6">
                        <Link href="/products" className="text-white bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-4 inline-block">
                            &larr; Back to Products List
                        </Link>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
                    </div>

                    {/* Product Image */}
                    <div className="w-full">
                        <img src={product.img} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Right Column - Product Information */}
                <div>
                    {/* Rating Section */}
                    <div className="flex items-center my-2">
                        <span className="text-yellow-500">&#9733; {product.rating} ({product.reviews} Reviews)</span>
                    </div>

                    {/* Product Description */}
                    <div className="mt-6 text-gray-700 text-sm">
                        <h2 className="text-lg font-semibold">Description</h2>
                        <p>{product.description}</p>
                    </div>
                    {/* Price Section */}
                    <p className="text-2xl font-bold text-green-600 my-4">{product.price}</p>


                    {/* Product Specifications */}
                    {/* <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Specifications</h2>
                        <ul>
                            {product.specifications.map((spec, index) => (
                                <li key={index} className="flex justify-between text-gray-700 text-sm py-1">
                                    <span>{spec.label}</span>
                                    <span>{spec.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Add to Cart Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md mt-4 w-full">
                        Call for More Details
                    </button>
                </div>
            </div>
        </div>

        // <div className="container mx-auto p-6">
        //     <div className="max-w-2xl mx-auto">
        //         {/* Back Button */}
        //         <Link href="/products" className="text-white bg-blue-500 hover:bg-blue-700 rounded-md py-2 px-4 mb-4">
        //             &larr; Back to Products List
        //         </Link>
        //         <h1 className="text-3xl font-semibold mt-4">{product.name}</h1>
        //         <img src={product.img} alt={product.name} className="w-full h-96 object-cover my-4 rounded-lg" />
        //         <p className="text-lg text-gray-700">{product.description}</p>
        //         <p className="mt-4 text-2xl font-bold text-green-600">{product.price}</p>
        //     </div>
        // </div>

    );
}
