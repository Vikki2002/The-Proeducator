"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Story {
  title: string;
  image: string;
  description: string;
  readTime: string;
  link: string;
}

const stories: Story[] = [
  {
    title: "Which UK Universities Accept Transfer Students?",
    image: "https://storage.googleapis.com/a1aa/image/ihgg08-7J748uWbD0DxoovFpWkRx4uQDkDhpe1phyiY.jpg",
    description: "Are you considering a transfer but not sure which UK universities accept transfer students...",
    readTime: "5 mins read",
    link: "#",
  },
  {
    title: "MBA in UK: MBA in UK Fees, Requirements, Best Universities, Salary",
    image: "https://storage.googleapis.com/a1aa/image/8E2yfQIWGhxWW3_FxlLeKSqVmoNggtoaBiC1jvQFjSc.jpg",
    description: "An MBA in UK is one of the most popular courses among international students. Depending on...",
    readTime: "5 mins read",
    link: "#",
  },
  {
    title: "Public Universities in UK: List of 25+ Best Public Universities in UK",
    image: "https://storage.googleapis.com/a1aa/image/ftxrDtWA-1hKDr49SO-qk1wWcvgbjpzaad_6lT7Ag5c.jpg",
    description: "Public universities in the UK offer a great opportunity for students to pursue higher educ...",
    readTime: "5 mins read",
    link: "#",
  },
  {
    title: "Studying in London: A Complete Guide for International Students",
    image: "https://storage.googleapis.com/a1aa/image/sample-image.jpg",
    description: "London is home to some of the world's best universities. Here's what you need to know...",
    readTime: "6 mins read",
    link: "#",
  },
];

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleStories = stories.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < stories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">What&apos;s Trending in United Kingdom?</h1>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={startIndex === 0}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Carousel Container */}
        <div className="flex overflow-hidden w-full justify-center">
          {visibleStories.map((story, index) => (
            <div key={index} className="mx-2">
              <Image src={story.image} alt={story.title} width={400} height={192} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{story.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{story.readTime}</p>
                <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                <a className="text-blue-600 font-bold" href={story.link}>
                  Read Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={startIndex + 3 >= stories.length}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </main>
  );
};

export default Trending;
