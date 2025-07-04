import axios from 'axios';

// Create a simple Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
