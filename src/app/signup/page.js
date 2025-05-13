"use client";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaFacebookF, FaGoogle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const Signup = () => {
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Phone submitted:', phone);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign Up</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter your phone number to create an account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
                    {/* Phone Input */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <PhoneInput
                            country={'sy'} // Default country
                            value={phone}
                            onChange={setPhone}
                            inputStyle={{
                                width: '100%',
                                height: '48px',
                                borderRadius: '0.75rem',
                                fontSize: '16px'
                            }}
                            containerStyle={{
                                borderRadius: '0.75rem',
                                width: '100%'
                            }}
                            inputClass="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            buttonClass="focus:ring-2 focus:ring-indigo-500"
                            dropdownClass="rounded-xl shadow-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                        Continue
                        <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or continue with</span>
                        </div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            <FaFacebookF className="text-blue-600 mr-2" />
                            <span className="hidden sm:inline">Facebook</span>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            <FaGoogle className="text-red-500 mr-2" />
                            <span className="hidden sm:inline">Google</span>
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                    >
                        Log In
                    </Link>
                    {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Signup;