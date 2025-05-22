

'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    author: 'John Doe',
    date: '2025-03-15',
    image: 'https://source.unsplash.com/800x600/?technology,ai',
    excerpt: 'Discover how AI is transforming the way we build and interact with websites.',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    author: 'Jane Smith',
    date: '2025-03-10',
    image: 'https://source.unsplash.com/800x600/?coding,css',
    excerpt: 'A comprehensive guide to building responsive designs with Tailwind CSS.',
  },
  {
    id: 3,
    title: 'Top JavaScript Frameworks in 2025',
    author: 'Alice Johnson',
    date: '2025-02-28',
    image: 'https://source.unsplash.com/800x600/?javascript,coding',
    excerpt: 'An in-depth comparison of the leading JavaScript frameworks for modern development.',
  },
];

const ITEMS_PER_PAGE = 2;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">Latest Blog Posts</h1>
      <p className="text-gray-600 text-center">Stay updated with the latest trends and insights</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map(post => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image src={post.image} alt={post.title} width={800} height={600} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="text-gray-500">by {post.author}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <p className="mt-2">{post.excerpt}</p>
              <button className="btn btn-primary mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage} of {totalPages}</span>
        <button
          className="btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
