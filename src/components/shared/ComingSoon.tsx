import React from 'react'

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8">We're working hard to bring you something amazing. Stay tuned!</p>
        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
      </div>
    </div>
  )
}
