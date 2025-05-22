'use client';

import { useState } from 'react';
import { Calendar, DollarSign, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const scholarships = [
    {
        id: 1,
        name: 'Global Excellence Scholarship',
        provider: 'University of Cambridge',
        amount: '£25,000',
        deadline: '2025-04-15',
        eligibility: ['International Students', "Master's Level", 'Merit-based'],
        coverage: ['Tuition', 'Living Expenses'],
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        name: 'Future Leaders Scholarship',
        provider: 'Stanford University',
        amount: '$40,000',
        deadline: '2024-03-01',
        eligibility: ['All Nationalities', 'Graduate Studies', 'Leadership'],
        coverage: ['Full Tuition'],
        image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800',
    },
];

const ITEMS_PER_PAGE = 16;

export default function ScholarshipsPage() {
    interface Scholarship {
        id: number;
        name: string;
        provider: string;
        amount: string;
        deadline: string;
        eligibility: string[];
        coverage: string[];
        image: string;
    }

    const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [tab, setTab] = useState('upcoming');
    const now = new Date();

    const upcomingScholarships = scholarships.filter(scholarship => new Date(scholarship.deadline) > now);
    const previousScholarships = scholarships.filter(scholarship => new Date(scholarship.deadline) <= now);

    const displayedScholarships = tab === 'upcoming' ? upcomingScholarships : previousScholarships;

    const paginatedScholarships = displayedScholarships.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(displayedScholarships.length / ITEMS_PER_PAGE);

    return (
        <div className="w-full max-w-7xl mx-auto mt-[4rem] space-y-8 p-6">
            <h1 className="text-3xl font-bold">Scholarships</h1>
            <p className="text-gray-600">Find scholarships and grants to fund your education</p>

            <div className="tabs">
                <button className={`tab text-[20px] font-serif text-secondary-content ${tab === 'upcoming' ? 'tab-active' : ''}`} onClick={() => setTab('upcoming')}>Upcoming</button>
                <button className={`tab text-[20px] font-serif text-secondary-content ${tab === 'previous' ? 'tab-active' : ''}`} onClick={() => setTab('previous')}>Previous</button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedScholarships.map(scholarship => (
                    <div key={scholarship.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <Image src={scholarship.image} alt={scholarship.name} width={800} height={192} className="h-48 w-full object-cover" />

                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{scholarship.name}</h3>
                            <p className="text-gray-500">{scholarship.provider}</p>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4" />
                                    <span className="font-medium">{scholarship.amount}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>Deadline: {scholarship.deadline}</span>
                                </div>
                            </div>
                            <button className="btn btn-primary mt-4 w-full" onClick={() => setSelectedScholarship(scholarship)}>
                                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button className="btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                </button>
                <span className="mx-4">Page {currentPage} of {totalPages}</span>
                <button className="btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>

            {selectedScholarship && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h2 className="text-xl font-bold">Apply for {selectedScholarship.name}</h2>
                        <p className="text-gray-500">{selectedScholarship.provider}</p>
                        <form className="mt-4 space-y-4">
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                            <input type="email" placeholder="Email Address" className="input input-bordered w-full" />
                            <input type="tel" placeholder="Phone Number" className="input input-bordered w-full" />
                            <textarea placeholder="Why do you deserve this scholarship?" className="textarea textarea-bordered w-full" />
                            <div className="flex justify-end gap-2 mt-4">
                                <button type="button" className="btn" onClick={() => setSelectedScholarship(null)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
}
