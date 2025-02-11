import React from 'react'

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-evenly p-8 gap-8">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>

            {/* Right Content */}
            <div className="flex justify-between items-center gap-4">
                {/* <img
                        src="https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_incoming/300x200"
                        alt="Car Image 1"
                        className="rounded-2xl shadow-md w-1/2"
                        /> */}
                <div className="bg-black text-white px-6 py-12 rounded-lg text-center">
                    <p className="text-4xl font-bold">25+ years</p>
                    <p className="text-sm">Experience</p>
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="bg-black text-white px-6 py-4 rounded-lg text-center">
                        <p className="text-3xl font-bold">1000+</p>
                        <p className="text-sm">Satisfied Customers</p>
                    </div>

                    {/* <img
                    src="https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_incoming/300x200"
                    alt="Car Image 2"
                    className="rounded-2xl shadow-md"
                    /> */}
                    <div className="bg-black text-white px-6 py-4 rounded-lg text-center">
                        <p className="text-3xl font-bold">lorem</p>
                        <p className="text-sm">lorem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
