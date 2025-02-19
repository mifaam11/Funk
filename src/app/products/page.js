"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/utils/raw/rawData";


export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image src={product.img} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.price}</p>
                            <Link href={`/products/${product.id}`} className="block text-center mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
