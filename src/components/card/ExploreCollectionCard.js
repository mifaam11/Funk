import React from "react";

const ExploreCollectionCard = ({ title, price, image }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-64 sm:h-72 md:h-80">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="p-4 flex flex-col items-start gap-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm md:text-base text-gray-600">₹{price}</p>
            </div>
        </div>
    );
};

export default ExploreCollectionCard;
