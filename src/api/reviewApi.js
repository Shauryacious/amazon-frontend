// src/api/reviewApi.js
import apiClient from "./config";
import { CLIENT_TYPE } from "../constants/clientType";

// Add a review (consumer only)
export const addReview = (productId, rating, comment) =>
    apiClient.post(
        `/api/reviews/${productId}`,
        { rating, comment },
        {
            headers: {
                "x-client-type": CLIENT_TYPE
            }
        }
    );

// Get all reviews for a product (public)
export const fetchProductReviews = (productId) =>
    apiClient.get(`/api/reviews/product/${productId}`);

// Get current user's review for a product (consumer only)
export const fetchMyReviewForProduct = (productId) =>
    apiClient.get(
        `/api/reviews/product/${productId}/mine`,
        {
            headers: {
                "x-client-type": CLIENT_TYPE
            }
        }
    );
