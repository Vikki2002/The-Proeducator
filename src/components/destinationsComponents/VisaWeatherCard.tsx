"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VisaTypeProps {
  title: string;
  cost: string;
  type: string;
  description: string;
}

interface WeatherProps {
  city: string;
  min: number;
  max: number;
}

const VisaWeatherCard = ({ Weather, VisaType }: { Weather: WeatherProps[], VisaType: VisaTypeProps[] }) => {
  const [currentVisaIndex, setCurrentVisaIndex] = useState(0);

  const nextVisa = () => {
    setCurrentVisaIndex((prev) => (prev + 1) % VisaType.length);
  };

  const prevVisa = () => {
    setCurrentVisaIndex((prev) => (prev - 1 + VisaType.length) % VisaType.length);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Post Admission Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visa Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Visa for United Kingdom</h2>
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={prevVisa}
                className="btn btn-circle btn-ghost"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.div
                key={currentVisaIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 bg-base-100 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {VisaType[currentVisaIndex].title}
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold">
                    Cost - {VisaType[currentVisaIndex].cost}
                  </p>
                  <p className="text-gray-600">
                    {VisaType[currentVisaIndex].type}
                  </p>
                  <p className="text-sm">
                    {VisaType[currentVisaIndex].description}
                  </p>
                </div>
              </motion.div>

              <button
                onClick={nextVisa}
                className="btn btn-circle btn-ghost"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <button className="btn btn-primary w-full mt-4">
              Explore More
            </button>
          </div>
        </div>

        {/* Weather Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Weather</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Weather.map((city, index) => (
              <div
                key={index}
                className="bg-primary rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{city.city}</span>
                  <div className="flex gap-4">
                    <div className="text-blue-500">
                      {city.min}° <span className="text-xs">Min</span>
                    </div>
                    <div className="text-red-500">
                      {city.max}° <span className="text-xs">Max</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisaWeatherCard;