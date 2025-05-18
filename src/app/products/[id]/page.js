'use client';

import { products } from '@/utils/raw/rawData';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

export default function Page() {
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState('M');
    const { addToCart, cartItems } = useCart();

    useEffect(() => {
        if (id) {
            const foundProduct = products.find((prod) => prod.id === parseInt(id));
            setProduct(foundProduct);
            if (foundProduct?.colors?.length) {
                setSelectedColor(foundProduct.colors[0]);
            }
        }
    }, [id]);

    if (product === null) {
        return <div className="text-center text-xl pt-32">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center text-xl pt-32">Product not found</div>;
    }

    const isInCart = cartItems.some(
        (item) =>
            item.id === product.id &&
            item.color?.code === selectedColor?.code &&
            item.size === selectedSize
    );

    const handleAddToCart = () => {
        if (!isInCart) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                color: selectedColor,
                size: selectedSize,
                img: product.img,
            });
            toast.success('Item added to cart');
        }
    };

    const ShareIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
    );

    return (
        <div className="w-full min-h-screen pt-16 px-4 md:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-6 md:p-8">
                {/* LEFT IMAGE SECTION */}
                <div className="space-y-4">
                    {/* Back Button */}
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 p-1 rounded-lg hover:bg-gray-100 hover:underline gap-1 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden md:inline">Back to Products</span>
                        </Link>
                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                            <ShareIcon />
                        </button>
                    </div>

                    {/* Main Image */}
                    <div className="w-full aspect-square md:aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
                        <img src={product.img} alt={product.name} className="w-full h-full object-contain p-4" />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                        {product.thumbnails?.map((thumb, i) => (
                            <button key={i} className="flex-shrink-0 focus:outline-none">
                                <img src={thumb} alt={`Thumb ${i}`} className="w-16 h-16 rounded border hover:border-gray-400 transition-all object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT PRODUCT INFO SECTION */}
                <div className="flex flex-col justify-between pt-4 md:pt-0">
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Custom Fit Hoodie</p>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>

                        {/* Price */}
                        <div className="text-xl sm:text-2xl font-semibold text-gray-800">
                            ${product.price.toLocaleString()}
                            {product.originalPrice && (
                                <span className="text-gray-500 text-lg line-through ml-3 font-medium">
                                    ${product.originalPrice.toLocaleString()}
                                </span>
                            )}
                        </div>

                        {/* Color Options */}
                        <div>
                            <p className="text-sm font-medium mb-2">Color: {selectedColor?.name}</p>
                            <div className="flex gap-2">
                                {product.colors?.map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor?.code === color.code
                                            ? 'border-black scale-110'
                                            : 'border-gray-300 hover:border-gray-500'
                                            }`}
                                        style={{ backgroundColor: color.code }}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Size Options */}
                        <div>
                            <p className="text-sm font-medium mb-2">Size</p>
                            <div className="flex flex-wrap gap-2">
                                {['L', 'M', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-md text-sm md:text-base transition-all ${selectedSize === size
                                            ? 'bg-purple-600 text-white border-purple-600'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            {isInCart ? (
                                <Link
                                    href="/cart"
                                    className="flex-1 py-3 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 text-center transition-colors"
                                >
                                    Go to Cart
                                </Link>
                            ) : (
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-3 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                                >
                                    Add to Cart
                                </button>
                            )}

                            <button className="flex-1 border border-gray-300 text-gray-800 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-50">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 space-y-4">
                        <div className="text-sm text-gray-600">
                            <p className="mb-2">Secure payment guarantee</p>
                            <div className="flex gap-3 items-center">
                                <img src="/visa.png" alt="Visa" className="h-5" />
                                <img src="/mastercard.png" alt="MasterCard" className="h-5" />
                                <img src="/paypal.png" alt="PayPal" className="h-5" />
                                <span className="text-xs text-gray-500 ml-2">and more</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 border border-gray-200">
                            <p className="font-medium mb-1">Easy Returns</p>
                            <p>You have <strong>7 days</strong> to return the item(s) using:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Free store return</li>
                                <li>Free USPS Dropoff</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
