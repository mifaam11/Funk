import React from "react";

const Card = ({ image, date, title, description }) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 cursor-pointer">
            <div className="relative">
                {/* Blog Image */}
                <img src={image} alt={title} className="w-full h-60 object-cover rounded-2xl" />

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-orange-200 px-3 py-1 text-sm rounded-lg font-medium">
                    {date}
                </div>

                {/* Arrow Button */}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                    {/* Custom SVG Arrow Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

export default Card;
