import React from 'react'

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md my-7">
      <div className="text-center">
        <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
          <span className="text-3xl">🏆</span>
          <span className="text-3xl font-bold text-red-500">INDIA's</span>
          <span className="text-2xl text-gray-700">Premier Choice for </span>
          <span className="text-2xl font-bold text-red-500">Advertising Solutions</span>
          {/* <span className="text-xl text-yellow-400">⭐⭐⭐⭐☆</span> */}
        </div>
        
        <p className="text-gray-600 italic max-w-3xl mx-auto leading-relaxed">
        Delivering tailored strategies to boost brand visibility across digital, print, and outdoor platforms.
        </p>
      </div>
    </div>
  )
}

export default Banner

