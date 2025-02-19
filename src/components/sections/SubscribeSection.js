import React from "react";

export default function SubscribeSection() {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white w-[90%] mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
                Subscribe and get <span className="font-bold">20% off</span> <br />
                <span className="block">your first rental.</span>
            </h2>

            {/* Input Field with Button Inside */}
            <div className="relative w-full max-w-lg">
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-green-600 text-white px-5 rounded-[10px] font-medium hover:bg-green-700">
                    Submit
                </button>
            </div>
        </div>
    );
}
