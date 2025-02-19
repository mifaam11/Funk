import React from 'react';

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 w-[90%] mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left w-full md:w-1/2">
                <h2 className="text-5xl font-bold mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-[21rem] h-[13rem]">
                    <img
                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-black text-white px-6 py-4 rounded-lg text-center">
                        <p className="text-3xl font-bold">+10 years</p>
                        <p className="text-sm">Experience</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-[13rem]">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww"
                            alt="Convertible Car"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
