import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewArrivalCard = ({ id, title, image, price, originalPrice }) => {
    const Price = typeof price === 'number' ? price : null;
    const OriginalPrice = typeof originalPrice === 'number' ? originalPrice : null;

    const discount = Price !== null && OriginalPrice !== null
        ? Math.round(((OriginalPrice - Price) / OriginalPrice) * 100)
        : 0;

    return (
        <Link href={`/products/${id}`}>
            <div className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden cursor-pointer">
                <div className="relative w-full aspect-[3/4]">
                    {image && (
                        <Image
                            src={image}
                            alt={title || 'Product'}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 25vw"
                        />
                    )}
                    {discount > 0 && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            -{discount}%
                        </div>
                    )}
                </div>
                <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                        {title || 'No Title'}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-bold text-sm">
                            ₹{Price !== null ? Price.toLocaleString() : 'N/A'}
                        </span>
                        {OriginalPrice !== null && (
                            <span className="text-xs text-gray-400 line-through">
                                ₹{OriginalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewArrivalCard;
