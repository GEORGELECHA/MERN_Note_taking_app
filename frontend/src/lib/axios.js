import axios from "axios";

// Dynamically set the base URL based on the environment
//

const BASE_URL = import.meta.env.MODE ==="development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL, // Base URL for your API requests
    
});

export default api;
// You can add interceptors or default headers if needed
// For example, to add an authorization token to every request:
// api.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

// export default api;