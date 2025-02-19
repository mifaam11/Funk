import React from 'react';

export default function Offer() {
    return (
        <div className="flex items-center bg-green-800 py-10">
            <div className='flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-8'>

                {/* Left Section */}
                <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2 p-8 text-white rounded-lg">
                    <h2 className="text-5xl font-bold">Best offer</h2>
                    <p className="text-2xl">Bentley Flying Spur</p>
                    <p className="text-xl text-gray-300">for $400/day</p>
                    <button className="bg-orange-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500">
                        Rent Now
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center bg-green-900 p-8 rounded-lg">
                    <img
                        src='./assets/carimage.png'
                        alt="Bentley Flying Spur"
                        className="w-full max-w-[500px]"
                    />
                </div>
            </div>
        </div>
    );
}
