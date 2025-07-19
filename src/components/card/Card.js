import React from 'react';
import Image from 'next/image';

const Card = ({ title, brand = 'Funk', image, price, stockLeft = 12, isNew = true }) => {
    return (
        <div className="w-full max-w-[280px] bg-white border rounded-xl shadow-sm flex-shrink-0 hover:shadow-md transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative w-full aspect-[3/4] rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />

                {/* New Arrival Badge */}
                {isNew && (
                    <div className="absolute top-3 left-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                        • New Arrival
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-3">
                {/* Brand */}
                <p className="text-xs text-gray-400">{brand}</p>

                {/* Title */}
                <h3 className="text-sm font-semibold truncate mb-1">{title}</h3>

                {/* Price */}
                <p className="text-sky-600 font-semibold text-sm mb-1">
                    ₹ {price.toLocaleString()}
                </p>

                {/* Stock Left */}
                <p className="text-xs text-red-500 font-medium">
                    {stockLeft} items left!
                </p>
            </div>
        </div>
    );
};

export default Card;
