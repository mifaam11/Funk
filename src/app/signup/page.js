'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaFacebookF, FaGoogle, FaArrowRight } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import Link from 'next/link';
import Head from 'next/head';

const Signup = () => {
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Phone submitted:', phone);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <>
            <Head>
                <title>Sign Up | Your App Name</title>
                <meta name="description" content="Create your account" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <div className="min-h-screen flex flex-col">
                {/* Header */}
                {/* <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link href="/" className="text-xl font-bold text-indigo-600">
                            YourLogo
                        </Link>
                        <Link
                            href="/login"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign In
                        </Link>
                    </div>
                </header> */}

                {/* Main Content */}
                <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 sm:px-6 lg:px-4 transition-colors duration-300">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-4">
                                <FiSmartphone className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Create Your Account
                            </h2>
                            <p className="mt-3 text-sm text-gray-600 sm:text-base">
                                Enter your phone number to get started
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6">
                            {/* Phone Input */}
                            <div className="space-y-3">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:text-base">
                                    Phone Number
                                </label>
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={setPhone}
                                    inputStyle={{
                                        width: '100%',
                                        height: '48px',
                                        borderRadius: '12px',
                                        fontSize: '16px',
                                        borderColor: '#D1D5DB',
                                        transition: 'all 0.2s ease'
                                    }}
                                    containerStyle={{
                                        borderRadius: '12px',
                                        width: '100%'
                                    }}
                                    inputClass="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-400"
                                    buttonClass="hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500 rounded-l-lg"
                                    dropdownClass="rounded-xl shadow-lg border border-gray-200"
                                    dropdownStyle={{
                                        borderRadius: '12px',
                                        marginTop: '8px'
                                    }}
                                    enableSearch
                                    searchPlaceholder="Search country"
                                    searchClass="p-2 border-b border-gray-200 focus:ring-2 focus:ring-indigo-500"
                                    placeholder="+91 12345 67890"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    We'll send a verification code to this number
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-md`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Continue
                                        <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">or sign up with</span>
                                </div>
                            </div>

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <FaFacebookF className="text-blue-600 mr-2 text-lg" />
                                    <span className="hidden sm:inline">Facebook</span>
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-xl bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <FaGoogle className="text-red-500 mr-2 text-lg" />
                                    <span className="hidden sm:inline">Google</span>
                                </button>
                            </div>
                        </form>

                        <div className="text-center text-sm text-gray-600">
                            <p>
                                Already have an account?{' '}
                                <Link
                                    href="/login"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline transition-colors duration-200"
                                >
                                    Log In
                                </Link>
                            </p>
                            <p className="mt-2 text-xs text-gray-500">
                                By signing up, you agree to our{' '}
                                <Link href="/terms" className="text-indigo-500 hover:underline">Terms</Link> and{' '}
                                <Link href="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Signup;