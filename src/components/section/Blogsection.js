import React from 'react';

const blogPosts = [
    {
        image: "https://img.freepik.com/free-photo/mini-coupe-driving-highway-accross-mountains_114579-4015.jpg",
        date: "20.08.2023",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        image: "https://img.freepik.com/free-photo/mini-coupe-driving-highway-accross-mountains_114579-4015.jpg",
        date: "20.10.2022",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        image: "https://img.freepik.com/free-photo/mini-coupe-driving-highway-accross-mountains_114579-4015.jpg",
        date: "19.10.2022",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

export default function BlogSection() {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-4">Blog</h2>
            <p className="text-gray-500 mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="border rounded-xl overflow-hidden shadow-lg relative">
                        <img src={post.image} alt="blog post" className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <div className="absolute top-4 left-4 bg-peach p-2 text-black font-medium rounded-xl">
                                {post.date}
                            </div>
                            <h3 className="font-bold text-xl mt-4 truncate">{post.title}</h3>
                            <p className="text-gray-500 mt-2 truncate">{post.description}</p>
                        </div>
                        <div className="p-4 flex justify-end">
                            <button className="bg-black text-white p-2 rounded-md">
                                →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
