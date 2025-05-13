// components/card/NewArrivalCard.js

import React from 'react';
import Image from 'next/image';

const NewArrivalCard = ({ title, image, price, originalPrice }) => {
    const discount = originalPrice && price
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    return (
        <div className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <div className="relative w-full aspect-[3/4]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                />
                {discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        -{discount}%
                    </div>
                )}
            </div>
            <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                    {title}
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-black font-bold text-sm">
                        ₹{price.toLocaleString()}
                    </span>
                    {originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                            ₹{originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewArrivalCard;
