import React from "react";
import { Link } from "react-router-dom";

export default function OurAuthors() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Our Authors</h1>
        <p className="text-gray-600 mb-6">Blog section: Our Authors</p>
        <Link to="/blog" className="text-blue-600">← Back to Blog</Link>
      </div>
    </div>
  );
}
