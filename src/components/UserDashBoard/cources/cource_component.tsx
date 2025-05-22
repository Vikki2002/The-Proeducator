'use client';

import { useState } from 'react';
import { Search, BookOpen, Clock, Filter } from 'lucide-react';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    name: 'Master of Computer Science',
    university: 'University of Cambridge',
    duration: '2 years',
    type: 'Full-time',
    startDate: 'September 2024',
    field: 'Computer Science',
    level: "Master's",
    tags: ['Computer Science', 'Technology', 'AI'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive program covering advanced topics in computer science, artificial intelligence, and software engineering.',
  },
  {
    id: 2,
    name: 'MSc Data Science',
    university: 'Stanford University',
    duration: '1.5 years',
    type: 'Full-time',
    startDate: 'August 2024',
    field: 'Data Science',
    level: "Master's",
    tags: ['Data Science', 'Machine Learning', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'An intensive program focusing on data analysis, machine learning, and statistical methods.',
  },
];

export default function CoursesComponentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState('All Fields');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  const filteredCourses = courses.filter((course) => {
    return (
      (course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedField === 'All Fields' || course.field === selectedField) &&
      (selectedLevel === 'All Levels' || course.level === selectedLevel)
    );
  });

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="text-gray-500">Discover programs that match your academic goals</p>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            className="input input-bordered pl-9 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select className="select select-bordered" value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
            <option>All Fields</option>
            <option>Computer Science</option>
            <option>Data Science</option>
            <option>Business</option>
            <option>Engineering</option>
          </select>
          <select className="select select-bordered" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            <option>All Levels</option>
            <option>Bachelor&apos;s</option>
            <option>Master&apos;s</option>
            <option>PhD</option>
          </select>
          <button className="btn btn-outline">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="card shadow-lg cursor-pointer">
              <figure>
                <Image src={course.image} alt={course.name} width={800} height={192} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.name}</h2>
                <p className="text-gray-500">{course.university}</p>
                <div className="mt-2 text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {course.duration}
                  <BookOpen className="h-4 w-4 ml-2" /> {course.type}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span key={tag} className="badge badge-outline">{tag}</span>
                  ))}
                </div>
                <button className="btn btn-primary mt-4">View Details</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
}
