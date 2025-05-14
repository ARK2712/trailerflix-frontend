import React from "react";

function TrailerCard({ trailer }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <video src={trailer.url} controls className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{trailer.title}</h2>
        <p className="text-gray-400">{trailer.description}</p>
      </div>
    </div>
  );
}

export default TrailerCard;
