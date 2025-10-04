import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api", // Base URL for your API requests
    
});

export default api;
// You can add interceptors or default headers if needed
// For example, to add an authorization token to every request:
// api.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

// export default api;