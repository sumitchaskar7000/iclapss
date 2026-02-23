import React from "react";
import { Link } from "react-router-dom";

export default function People() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Our People</h1>
        <p className="text-gray-600 mb-6">Placeholder page for Our People.</p>
        <Link to="/" className="text-blue-600">← Back home</Link>
      </div>
    </div>
  );
}
