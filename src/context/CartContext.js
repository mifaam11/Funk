'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCart);
    }, []);

    // Save cart to localStorage when items change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(
            (item) =>
                item.id === product.id &&
                item.selectedColor?.code === product.selectedColor?.code &&
                item.selectedSize === product.selectedSize
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItems(updatedCart);
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) =>
                    !(
                        item.id === product.id &&
                        item.selectedColor?.code === product.selectedColor?.code &&
                        item.selectedSize === product.selectedSize
                    )
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (product, newQuantity) => {
        if (newQuantity < 1) return;

        const updatedCart = cartItems.map((item) => {
            if (
                item.id === product.id &&
                item.selectedColor?.code === product.selectedColor?.code &&
                item.selectedSize === product.selectedSize
            ) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook
export const useCart = () => useContext(CartContext);
