import React from 'react'

export default function Contactform() {
    return (
        <div className='pt-10 bg-[#f4f7fe]'>

            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#F4F7FE] p-6 md:p-12 w-11/12 mx-auto">
                {/* Left Section - Contact Info */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-bold text-black">Contact Us</h1>
                    <p className="text-gray-700 text-lg">Email, call, or complete the form to learn how Funk can solve your messaging problem.</p>
                    <p className="text-lg font-medium text-black">info@funk.com</p>
                    <p className="text-lg font-medium text-black"></p>
                    <a href="#" className="text-blue-600 underline font-medium">Customer Support</a>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 mt-6">
                        <div>
                            <h3 className="font-semibold">Customer Support</h3>
                            <p className="text-sm text-gray-600">Our support team is available around the clock to address any concerns or queries you may have.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Feedback and Suggestions</h3>
                            <p className="text-sm text-gray-600">We value your feedback and are continuously working to improve Snappy.</p>
                        </div>
                        {/* <div>
                            <h3 className="font-semibold">Media Inquiries</h3>
                            <p className="text-sm text-gray-600">For media-related questions, contact us at media@snappyapp.com.</p>
                        </div> */}
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg mt-6 md:mt-0">
                    <h2 className="text-3xl font-bold text-black">Get in Touch</h2>
                    <p className="text-gray-600 text-lg mb-4">You can reach us anytime.</p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="First name" className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            <input type="text" placeholder="Last name" className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <input type="email" placeholder="Your email" className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input type="text" placeholder="Phone number" className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <textarea placeholder="How can we help?" className="p-4 border rounded-xl w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                            Submit
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 mt-3 text-center">
                        By contacting us, you agree to our <a href="#" className="text-blue-600 underline">Terms</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}
