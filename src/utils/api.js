import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://products-api-20yl.onrender.com";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// GET Request Utility
export async function getData(endpoint) {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`GET ${endpoint} failed:`, error);
        throw new Error("Failed to fetch data from API");
    }
}
