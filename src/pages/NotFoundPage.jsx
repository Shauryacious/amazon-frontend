// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container-app py-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-app mb-4">404</h1>
      <p className="text-lg text-app-muted mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-app-accent text-app font-bold px-6 py-2 rounded hover:brightness-90 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
