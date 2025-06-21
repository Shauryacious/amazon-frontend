// src/components/ReviewList.jsx
import React, { useEffect, useState } from "react";
import { fetchProductReviews } from "../api/reviewApi";

function StarDisplay({ rating }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            rating >= star ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProductReviews(productId)
      .then((res) => {
        if (mounted) setReviews(res.data.reviews || []);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [productId]);

  if (loading) return <div>Loading reviews...</div>;
  if (!reviews.length)
    return <div className="text-gray-500">No reviews yet.</div>;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-2">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review._id} className="bg-slate-50 p-3 rounded shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <StarDisplay rating={review.rating} />
            <span className="text-xs text-gray-500">
              {review.user?.email || "Anonymous"}
            </span>
            <span className="ml-auto text-xs text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="text-sm">{review.comment}</div>
        </div>
      ))}
    </div>
  );
}
