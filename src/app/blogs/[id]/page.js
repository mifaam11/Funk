'use client'
import { blogPosts } from '@/utils/raw/rawData';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const router = useParams();
    const { id } = router;

    console.log(id)
    // Use local state to handle data loading and error states
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            const foundPost = blogPosts.find((prod) => prod.id === parseInt(id));
            setPost(foundPost);
        }
    }, [id]); // Runs when `id` changes (or page first loads)
    // If the product is not found, show a message
    if (post === null) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    if (!post) {
        return <div className="text-center text-xl">Product not found</div>;
    }



    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-8 lg:px-20">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Article Header */}
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/1200x500" // Replace with your image
                        alt="Article Cover"
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <h1 className="text-4xl font-semibold">{post.title}</h1>
                        <p className="mt-2">By {post.author}</p>
                    </div>
                </div>

                {/* Article Content */}
                <div className="px-8 py-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {post.description}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {post.description}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {post.description}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 my-4">
                        {post.description}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {post.description}
                    </p>

                    {/* Example of a Code Block */}
                    <pre className="bg-gray-800 text-white p-4 rounded-lg my-6">
                        <code>npm install -D tailwindcss postcss autoprefixer</code>
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-800 my-4">
                        {post.description}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {post.description}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {post.description}
                    </p>

                    {/* Example of Image in Responsive Layout */}
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Responsive Example"
                        className="w-full h-auto max-w-md mx-auto"
                    />
                </div>

                {/* Footer */}
                <div className="bg-gray-100 py-6 text-center">
                    <p className="text-sm text-gray-600">Published on February 19, 2025</p>
                </div>
            </div>
        </div>
    )
}
