import React from "react";
import { Link } from "react-router-dom";

export default function DigitalDesign() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Digital Design</h1>
        <p className="text-gray-600 mb-6">Service: Digital Design</p>
        <Link to="/services" className="text-blue-600">← Back to Services</Link>
      </div>
    </div>
  );
}
