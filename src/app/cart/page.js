'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { FiShoppingBag, FiArrowLeft, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getTotal = () =>
        cartItems.reduce((sum, item) => {
            const price = parseFloat(item.price);
            return sum + price * item.quantity;
        }, 0);

    if (!isClient) return null;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gray-50">
                <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">
                    <div className="flex justify-center mb-6">
                        <FiShoppingBag className="text-5xl text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium"
                    >
                        <FiArrowLeft size={18} />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {cartItems.map((item, i) => {
                            const price = parseFloat(item.price);

                            return (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-4 sm:p-6 flex flex-row gap-6 shadow-sm border border-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-28 sm:w-32 h-40 object-contain rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                                                {item.selectedColor && (
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Color: <span className="capitalize">{item.selectedColor.name}</span>
                                                    </p>
                                                )}
                                                {item.selectedSize && (
                                                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>

                                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item, Math.max(1, item.quantity - 1))
                                                    }
                                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FiMinus size={16} />
                                                </button>
                                                <span className="w-10 text-center py-1 border rounded text-sm font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item, item.quantity + 1)}
                                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                                    aria-label="Increase quantity"
                                                >
                                                    <FiPlus size={16} />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-sm text-gray-600 mb-1">
                                                    ${price.toFixed(2)} × {item.quantity}
                                                </p>
                                                <p className="font-bold text-lg text-indigo-600">
                                                    ${(price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${getTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex justify-between">
                                    <span className="text-gray-800 font-semibold">Total</span>
                                    <span className="text-xl font-bold text-gray-900">${getTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => alert('Proceeding to checkout')}
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                onClick={clearCart}
                                className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 text-sm font-medium py-2 transition-colors"
                            >
                                <FiTrash2 size={16} />
                                Clear Cart
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <Link
                                    href="/products"
                                    className="flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                                >
                                    <FiArrowLeft size={16} />
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
