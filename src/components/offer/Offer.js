import React from 'react';

export default function Offer() {
    return (
        <div className="flex items-center justify-between bg-green-900 text-white p-8 ">
            {/* Left Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold">Best offer</h2>
                <p className="text-2xl">Bentley Flying Spur</p>
                <p className="text-xl text-gray-300">for $400/day</p>
                <button className="bg-orange-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500">
                    Rent Now
                </button>
            </div>

            {/* Right Section */}
            <img
                src="https://img.freepik.com/free-photo/mini-coupe-driving-highway-accross-mountains_114579-4015.jpg?t=st=1739037980~exp=1739041580~hmac=e2ee02ab3b108b7409c5aba401d1e46e7efb670fe3ed85be5b835fe576393cdf&w=900"
                alt="Bentley Flying Spur"
                className="rounded-xl shadow-lg w-1/2"
            />
        </div>
    );
}
