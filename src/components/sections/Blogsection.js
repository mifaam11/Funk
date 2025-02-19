import React from "react";

const blogPosts = [
    {
        image: "https://img.freepik.com/free-photo/back-shot-white-car_23-2148320258.jpg?ga=GA1.1.1270432451.1739037671&semt=ais_authors_boost",
        date: "20.08.2023",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "https://img.freepik.com/free-photo/young-man-closing-car-trunk_23-2148321902.jpg?t=st=1739551533~exp=1739555133~hmac=15109cc3ae00257ad6b15b8d584158efbc3e6e924a76a7f26bde9c11e77e0c33&w=900",
        date: "20.10.2022",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2149375011.jpg?t=st=1739551425~exp=1739555025~hmac=dcfdbb1d915a161ea12dc4d870ff35d5f19dacd0344023b85a6c214ca1ab92e6&w=900",
        date: "19.10.2022",
        title: "Lorem Ipsum is simply dummy text of the printing...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];

export default function BlogSection() {
    return (
        <div className="container mx-auto py-10 w-[90%]">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-4xl font-bold">Blog</h2>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((blog, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="relative">
                            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
                            <div className="absolute bottom-4 left-4 bg-orange-300 px-3 py-1 rounded-md text-sm font-semibold">{blog.date}</div>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer shadow-md">→</div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{blog.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
