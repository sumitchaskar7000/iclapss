import React from "react";
import { Link } from "react-router-dom";

export default function AffiliateProgram() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Affiliate Program</h1>
        <p className="text-gray-600 mb-6">Company: Affiliate Program</p>
        <Link to="/about" className="text-blue-600">← Back to Company</Link>
      </div>
    </div>
  );
}
