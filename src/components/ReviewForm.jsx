// src/components/ReviewForm.jsx
import React, { useState } from "react";
import { addReview } from "../api/reviewApi";

// Simple star rating input component
function StarRating({ value, onChange }) {
  return (
    <div className="flex items-center mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className="focus:outline-none"
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          <span
            className={`text-2xl ${
              value >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm({ productId, onSuccess }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!rating) {
      setError("Please select a rating.");
      return;
    }

    setSubmitting(true);
    try {
      await addReview(productId, rating, comment);
      setSuccess(true);
      setComment("");
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to submit review. You may have already reviewed this product."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow max-w-md w-full"
    >
      <h3 className="font-semibold text-lg mb-2">Leave a Review</h3>
      <StarRating value={rating} onChange={setRating} />
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={3}
        placeholder="Share your experience (optional)"
        value={comment}
        maxLength={2000}
        onChange={(e) => setComment(e.target.value)}
      />
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      {success && (
        <div className="text-green-600 text-sm mb-2">Review submitted!</div>
      )}
      <button
        type="submit"
        className="bg-[#FF9900] text-white px-4 py-2 rounded hover:bg-[#e68a00] disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
