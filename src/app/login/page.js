'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiPhone, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import Head from 'next/head';

export default function LoginPage() {
    const [formData, setFormData] = useState({ phone: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log('Logging in:', formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Head>
                <title>Login | Your App Name</title>
                <meta name="description" content="Login to your account" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* Top padding added below for fixed header space */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 p-4 sm:p-6 lg:p-16 pt-16">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:shadow-md transition-all duration-300 transform hover:shadow-lg">

                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Welcome back</h1>
                        <p className="text-sm sm:text-base text-gray-600">Log in to your account to continue</p>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center my-5 sm:my-7">
                        <img
                            src="/auth-illustration.png"
                            alt="Login Illustration"
                            className="w-36 h-36 sm:w-44 sm:h-44 object-contain transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Phone Number Field */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiPhone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="e.g. +1 234 567 8900"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    pattern="[+]{1}[0-9]{1,3}[0-9]{4,14}"
                                    title="Enter a valid phone number with country code"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs sm:text-sm text-blue-600 hover:text-blue-500 hover:underline transition-colors duration-200"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
                                    className="block w-full pl-10 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center items-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    Log in <FiArrowRight className="ml-2" />
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 bg-white text-sm text-gray-500">or continue with</span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden sm:inline">Facebook</span>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                            </svg>
                            <span className="hidden sm:inline">Google</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>
                            Don't have an account?{' '}
                            <Link
                                href="/signup"
                                className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors duration-200"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
