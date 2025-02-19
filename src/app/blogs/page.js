import React from "react";
import Image from "next/image";
import { blogPosts } from "@/utils/raw/rawData";
import Link from "next/link";


export default function Page() {
  return (
    <div className="px-6 md:px-16 py-12 w-[90%] mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Articles</h1>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>

          <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
            <Image
              src={post.authorImage}
              alt={post.author}
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <p className="text-gray-600 mb-4">{post.description}</p>

          <Link href={`/blogs/${post.id}`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
