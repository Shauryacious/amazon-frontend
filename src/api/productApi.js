// src/api/productApi.js
import apiClient from "./config";

// Fetch all products for consumers (public endpoint)
export const fetchAllProducts = () =>
    apiClient.get("/api/products");

// Optionally, fetch a single product by ID
export const fetchProductById = (productId) =>
    apiClient.get(`/api/products/${productId}`);
