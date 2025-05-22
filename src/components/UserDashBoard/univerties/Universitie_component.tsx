"use client";

import { useState } from "react";
import { Search, MapPin, GraduationCap, DollarSign, Filter } from "lucide-react";

const universities = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `University ${i + 1}`,
    location: ["UK", "USA", "Switzerland"][i % 3],
    ranking: `#${i + 1} World Ranking`,
    image: "https://images.unsplash.com/photo-1526314114033-349ef6f72220?auto=format&fit=crop&q=80&w=800",
    programs: "300+ Programs",
    tuitionRange: "$30,000 - $50,000/year",
}));

const Countries = [
    { id: 1, name: "UK", code: "GB" },
    { id: 2, name: "USA", code: "US" },
    { id: 3, name: "Switzerland", code: "CH" },
];

export default function Universities() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const universitiesPerPage = 16;

    // Filter universities based on search input and country
    const filteredUniversities = universities.filter((university) => {
        const matchesSearch = university.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === "all" || university.location === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    // Paginate results
    const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);
    const paginatedUniversities = filteredUniversities.slice(
        (currentPage - 1) * universitiesPerPage,
        currentPage * universitiesPerPage
    );

    return (
        <div className="p-6 space-y-8 mt-6">
            <div>
                <h1 className="text-3xl font-bold">Universities</h1>
                <p className="text-gray-500">Explore top universities worldwide and find your perfect match</p>
            </div>

            {/* Search & Filter Section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search universities..."
                        className="input input-bordered pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        className="select select-bordered w-48"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        <option value="all">All Countries</option>
                        {Countries.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <button className="btn btn-outline">
                        <Filter className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* University Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {paginatedUniversities.map((university) => (
                    <div key={university.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={university.image} alt={university.name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{university.name}</h3>
                            <p className="text-sm text-secondary-content">{university.ranking}</p>
                            <div className="mt-2 space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {university.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-primary" />
                                    {university.programs}
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-primary" />
                                    {university.tuitionRange}
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm font-medium text-secondary-content">{university.ranking}</span>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="join flex justify-center mt-8">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                        «
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                        »
                    </button>
                </div>
            )}

            {/* No Results Message */}
            {filteredUniversities.length === 0 && (
                <div className="text-center text-gray-500">
                    No universities found for &quot;{searchQuery}&quot; in {selectedCountry !== "all" ? selectedCountry : "all countries"}.
                </div>
            )}
        </div>
    );
}
