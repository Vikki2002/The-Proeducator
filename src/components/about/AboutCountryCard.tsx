"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const countries = [
    {
        country: "UK",
        offers: "46000+",
        flag: "https://storage.googleapis.com/a1aa/image/bW9Ae1E9_E_ukzlPShqcHrWoW2FGBAWn3bKWMxeZdxk.jpg",
    },
    {
        country: "USA",
        offers: "3500+",
        flag: "https://storage.googleapis.com/a1aa/image/70PpTf8b5wEUibI0W1UzVVMo3aIJl1m0KmBiMrCczLU.jpg",
    },
    {
        country: "Canada",
        offers: "12000+",
        flag: "https://storage.googleapis.com/a1aa/image/canada-flag.jpg",
    },
    {
        country: "Australia",
        offers: "8000+",
        flag: "https://storage.googleapis.com/a1aa/image/australia-flag.jpg",
    },
    {
        country: "Germany",
        offers: "9000+",
        flag: "https://storage.googleapis.com/a1aa/image/germany-flag.jpg",
    },
    {
        country: "France",
        offers: "5000+",
        flag: "https://storage.googleapis.com/a1aa/image/france-flag.jpg",
    },
    {
        country: "Ireland",
        offers: "3000+",
        flag: "https://storage.googleapis.com/a1aa/image/ireland-flag.jpg",
    },
    {
        country: "New Zealand",
        offers: "4500+",
        flag: "https://storage.googleapis.com/a1aa/image/new-zealand-flag.jpg",
    },
    {
        country: "Japan",
        offers: "2000+",
        flag: "https://storage.googleapis.com/a1aa/image/japan-flag.jpg",
    },
    {
        country: "Singapore",
        offers: "3200+",
        flag: "https://storage.googleapis.com/a1aa/image/singapore-flag.jpg",
    },
];

const AboutCounCard: React.FC = () => {
    // Split countries into chunks of 8
    const chunkedCountries = Array.from({ length: Math.ceil(countries.length / 8) }, (_, i) =>
        countries.slice(i * 8, i * 8 + 8)
    );

    return (
        <div className="bg-white">
            <main className="container mx-auto py-12 px-6">
                <h2 className="text-blue-600 text-xl font-bold">Our Students</h2>
                <h1 className="text-3xl font-bold mt-2">Across the globe</h1>
                <div className="flex flex-row mt-8 gap-6">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                        <Image
                            alt="Students around the world"
                            className="rounded-xl shadow-lg object-cover"
                            height={400}
                            src="https://storage.googleapis.com/a1aa/image/l834_o8bYtO69YmRuv3DyBd7RsEp0fhi-HWg_x1nDvE.jpg"
                            width={300}
                        />
                    </div>

                    {/* Swiper Country Cards */}
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={20}
                            slidesPerView={1}
                        >
                            {chunkedCountries.map((group, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {group.map((item, i) => (
                                            <AboutCountryCard
                                                key={`${item.country}-${i}`}
                                                country={item.country}
                                                offers={item.offers}
                                                flag={item.flag}
                                            />
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
        </div>
    );
};

interface CountryCardProps {
    country: string;
    offers: string;
    flag: string;
}

const AboutCountryCard: React.FC<CountryCardProps> = ({ country, offers, flag }) => {
    return (
        <div className="bg-gray-100 hover:bg-blue-50 p-4 rounded-lg text-center shadow transition-all duration-300">
            <Image
                alt={`${country} flag`}
                className="mx-auto mb-3 rounded"
                height={30}
                src={flag}
                width={50}
            />
            <h3 className="font-bold text-lg">{country}</h3>
            <p className="text-sm text-gray-600">{offers} Offers</p>
        </div>
    );
};

export default AboutCounCard;
