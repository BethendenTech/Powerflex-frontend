import axios from "axios";
// import Router from "next/router"; // For handling redirection

// Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    // Axios configuration options here
});

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => {
        // If the response is successful, just return the data
        return response;
    },
    (error) => {
        // Check if the error is a 401 Unauthorized
        if (error.response && error.response.status === 401) {
            // Option 1: Redirect to login page
            // Router.push("/login"); // Adjust the route as needed

            // Option 2: Logout the user and clear tokens (optional)
            // localStorage.removeItem("token");  // Example if you're using localStorage
            // Session handling or other cleanup can go here

            // Optionally show a message or alert
            console.error("Unauthorized! Redirecting to login...");
        }

        // Return the error so that it can be handled elsewhere if needed
        return Promise.reject(error);
    }
);

export default axiosInstance;