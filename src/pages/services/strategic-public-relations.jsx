import React from "react";
import { Link } from "react-router-dom";

export default function StrategicPublicRelations() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Strategic Public Relations</h1>
        <p className="text-gray-600 mb-6">Service: Strategic Public Relations</p>
        <Link to="/services" className="text-blue-600">← Back to Services</Link>
      </div>
    </div>
  );
}
