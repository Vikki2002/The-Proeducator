'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, CheckCircle, XCircle, FileText, Upload } from 'lucide-react';

const applications = [
  {
    id: 1,
    university: 'University of Cambridge',
    program: 'MSc Computer Science',
    status: 'In Progress',
    progress: 75,
    deadline: 'March 15, 2024',
    documents: [
      { name: 'Transcripts', status: 'completed' },
      { name: 'CV/Resume', status: 'completed' },
      { name: 'Statement of Purpose', status: 'pending' },
      { name: 'References', status: 'pending' },
    ],
    image: 'https://images.unsplash.com/photo-1526314114033-349ef6f72220?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    university: 'Stanford University',
    program: 'MSc Data Science',
    status: 'Submitted',
    progress: 100,
    deadline: 'April 1, 2024',
    documents: [
      { name: 'Transcripts', status: 'completed' },
      { name: 'CV/Resume', status: 'completed' },
      { name: 'Statement of Purpose', status: 'completed' },
      { name: 'References', status: 'completed' },
    ],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
  },
];

export default function ApplicationsComponentPage() {
  interface ApplicationStatus {
    status: 'In Progress' | 'Submitted' | 'Draft' | string;
  }

  const getStatusColor = (status: ApplicationStatus['status']): string => {
    switch (status) {
      case 'In Progress':
        return 'badge-warning';
      case 'Submitted':
        return 'badge-success';
      case 'Draft':
        return 'badge-neutral';
      default:
        return 'badge-info';
    }
  };

  interface DocumentStatus {
    status: 'completed' | 'pending' | string;
  }

  const getDocumentIcon = (status: DocumentStatus['status']): React.ReactElement => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <XCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-gray-500">Track and manage your university applications</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <div key={application.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src={application.image}
                alt={application.university}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{application.university}</h3>
                <span className={`badge ${getStatusColor(application.status)}`}>{application.status}</span>
              </div>
              <p className="text-gray-500">{application.program}</p>

              <div className="mt-3">
                <span className="text-sm font-medium">Application Progress</span>
                <progress className="progress progress-accent w-full mt-1" value={application.progress} max="100"></progress>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Deadline: {application.deadline}</span>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium">Required Documents:</p>
                {application.documents.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-2 border rounded-lg text-sm">
                    <div className="flex items-center gap-2 w-[140px]">
                      <FileText className="w-4 h-4" />
                      {doc.name}
                    </div>
                    {getDocumentIcon(doc.status)}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <button className="btn btn-primary flex-1">Continue</button>
                <button className="btn btn-outline btn-square">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
