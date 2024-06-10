import axios from 'axios';
const baseApi = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
});


// Add a request interceptor to check token status
baseApi.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTc5NzU0NTYsInVzZXJuYW1lIjoia2FAZ21haWwuY29tIn0.Lu49Yf4_KDKraIye-eMC00eSN8uwx506A1zZhDYQ69o`;
  return config;
});

export { baseApi };