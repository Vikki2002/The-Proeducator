"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
    name: string;
    role: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Anant Dongre",
        role: "VP Engineering",
        imageUrl: "/images/anant-dongre.jpg",
    },
    {
        name: "Lohit Kumar",
        role: "Regional Officer - Ludhiana",
        imageUrl: "/images/lohit-kumar.jpg",
    },
    {
        name: "Hrithik Agrawal",
        role: "Manager, Operations, Australia",
        imageUrl: "/images/hrithik-agrawal.jpg",
    },
];

const TestimonialCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-center text-3xl font-bold mb-6">Employee Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                            <div className="w-40 h-40 mx-auto relative">
                                <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    width={160}
                                    height={160}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <p className="text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
