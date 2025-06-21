// src/api/productApi.js
import apiClient from "./config";

export const fetchAllProducts = () =>
    apiClient.get("/api/products");

export const fetchProductById = (id) =>
    apiClient.get(`/api/products/${id}`);
