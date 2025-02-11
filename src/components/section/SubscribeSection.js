import React from 'react';

export default function SubscribeSection() {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Subscribe and get 20/ off on your first order.
            </h2>
            <div className="flex items-center mt-4 w-full max-w-md">
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="flex-1 p-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="bg-green-600 text-white px-5 py-3 rounded-r-xl font-medium">
                    Submit
                </button>
            </div>
        </div>
    );
}
