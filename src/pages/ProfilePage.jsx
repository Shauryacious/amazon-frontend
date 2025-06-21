// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in.</div>;

  // User profile view
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <strong>Name:</strong> {user.name || "N/A"}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
